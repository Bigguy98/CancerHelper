import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/services/common.service';
import { CreateQuesModalComponent } from '../../modals/create-ques-modal/create-ques-modal.component';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  modalRef!: NgbModalRef;

  questions: any[];

  constructor(private modalService: NgbModal,
    private commonService: CommonService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    const params = {
      filter: "id>0",
      page: 0,
      size: 10,
      sort: ["id,asc"]
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
