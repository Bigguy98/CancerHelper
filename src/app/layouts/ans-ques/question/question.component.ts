import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private modalService: NgbModal,
    private commonService: CommonService,
    private tokenService: TokenProvider) { }

  ngOnInit() {
    setTimeout(() => {
      this.fullName = this.getUserFullname();
    }, 1000)
    this.loadData();
  }

  getUserFullname(): string {
    const userInfo = this.tokenService.getUserInfo();
    return userInfo["fullName"];
  }

  loadData(): void {
    const params = {
      filter: "id>0",
      page: 0,
      size: 10,
      sort: ["createdDate,desc"]
    }
    this.commonService.getQuestions(params).subscribe((response: HttpResponse<any>) => {
      this.questions = (response.body && response.body.result) ? response.body.result.content : [];
    });
  }

  openModal(): void {
    console.log("Opening modal!");

    this.modalRef = this.modalService.open(CreateQuesModalComponent, {
      keyboard: true,
      backdrop: 'static',
      size: 'lg'
    });

    this.modalRef.result.then(
      () => {
        // on modal success
        console.log('modal success!');
        this.loadData();
      },
      () => {
        // on modal dismiss
        console.log('modal dismiss');
      }
    );
  }

}
