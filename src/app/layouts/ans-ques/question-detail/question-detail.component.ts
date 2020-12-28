import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';
import { TokenProvider } from '../../utils/jwt-token.util';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private toastService: ToastrService,
    private tokenProvide: TokenProvider) { }


    isCreatingAnswer = false;
    qId ;
    model = {
      editorData: '<p>Hello, world!</p>'
    };
    answers : any[];
    question : any;

  ngOnInit() {
    this.qId = this.route.snapshot.paramMap.get('id');
 
    if(! this.qId) {
      this.router.navigate([""]);
    }
    
    this.answers = [];
    this.loadQuestion();
    this.loadAnswers();

  }

  loadQuestion(): void {

    this.commonService.getQuestionDetail(this.qId).subscribe(((response: HttpResponse<any> ) => {
      this.question = response.body.result;
    }), () => {
      // in case there are no question
      this.router.navigate([""]);
    })
  }

  loadAnswers(): void {
    const params = {
      filter: "question.id==" + this.qId + ";status==1",
      page: 0,
      size: 100,
      sort: ["id,asc"]
    }

    this.commonService.searchAnswer(params).subscribe((response: HttpResponse<any>) => {
        this.answers = (response.body && response.body.result) ? response.body.result.content : [];
    })
  }
  
  clearEditorData(): void {
    this.model.editorData = "";
    this.isCreatingAnswer = false;
  }

  submitAnswer(): void {

    const entity = {
      "content": this.model.editorData,
      "owner": {
        "id": this.tokenProvide.getUserInfo()["id"]
      },
      "question": {
        "id": this.qId
      },
      "status": 1
    }
    this.commonService.createAnswer(entity).subscribe((response: HttpResponse<any>) => {
        if (response.body.code === 0) {
          this.toastService.success(response.body.message, "Success!");
          this.refresh();
        }
    })
  }

  refresh(): void {
    this.loadAnswers();
    this.clearEditorData();
  }
}
