import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { USER_INFO } from 'src/app/app.constants';
import { CommonService } from 'src/app/services/common.service';
import { CreateQuesModalComponent } from '../../modals/create-ques-modal/create-ques-modal.component';
import { TokenProvider } from '../../utils/jwt-token.util';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  modalRef!: NgbModalRef;

  questions: any[];

  fullName: string;

  currentUserId;

  constructor(private modalService: NgbModal,
    private commonService: CommonService,
    private tokenService: TokenProvider,
    private toastService: ToastrService) { }

  ngOnInit() {


    setTimeout(() => {
      this.fullName = this.getUserFullname();
      this.currentUserId = this.getCurrentUserID();
    }, 1000)
    this.loadData();

  }

  getCurrentUserID(): boolean{
    return this.tokenService.getUserInfo()["id"];
  }

  getUserFullname(): string {
    return this.tokenService.getUserInfo()["fullName"];
  }

  loadData(): void {
    const params = {
      filter: "status==1",
      page: 0,
      size: 10,
      sort: ["createdDate,desc"]
    }
    this.commonService.getQuestions(params).subscribe((response: HttpResponse<any>) => {
      this.questions = (response.body && response.body.result) ? response.body.result.content : [];
    });
  }

  openModal(): void {

    this.modalRef = this.modalService.open(CreateQuesModalComponent, {
      keyboard: true,
      backdrop: 'static',
      size: 'lg'
    });

    this.modalRef.componentInstance.question = "";

    this.modalRef.result.then(
      () => {
        // on modal success
        console.log('modal success!');
        this.loadData();
      },
      () => {
        console.log('modal dismiss');
      }
    );
  }

  onUpdateQuestion(question: any): void {
    console.log(question);
    this.modalRef = this.modalService.open(CreateQuesModalComponent, {
      keyboard: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.modalRef.componentInstance.question = question;

    this.modalRef.result.then(
      () => {
        // on modal success
        console.log('modal success!');
        this.loadData();
      },
      () => {
        console.log('modal dismiss');
      }
    );
    
    
  }

  onDeleteQuestion(id: number): void {
    if(confirm("Bạn có chắc muốn xóa?")) {
      this.commonService.deleteQuestion(id).subscribe((response: HttpResponse<any>) => {
        if (response.body.code === 0) {
          this.toastService.success(response.body.message);
          this.loadData();
        } 
      })
    }
  }

}
