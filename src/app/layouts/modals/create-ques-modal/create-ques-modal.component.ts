import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-ques-modal',
  templateUrl: './create-ques-modal.component.html',
  styleUrls: ['./create-ques-modal.component.scss']
})
export class CreateQuesModalComponent implements OnInit {

  content= "";
  hashtag = "";
  constructor(public activeModal: NgbActiveModal,) { }

  ngOnInit() {
  }

  dismiss(): void {
    this.activeModal.dismiss();
  }

  saveQuestion(): void {

    this.activeModal.close();
  }

}
