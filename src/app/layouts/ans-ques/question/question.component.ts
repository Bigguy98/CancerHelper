import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CreateQuesModalComponent } from '../../modals/create-ques-modal/create-ques-modal.component';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  modalRef!: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  loadData(): void {

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
