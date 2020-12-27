import { Component, Input, OnInit } from '@angular/core';
import { TokenProvider } from '../../utils/jwt-token.util';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {


  @Input() ans: any;
  htmlToAdd : any;

  isEditing;
  constructor(private tokenProvider: TokenProvider) {
    this.isEditing = false;
   }

  ngOnInit() {
    this.htmlToAdd = `<p>${this.ans.content}</p>`;

    console.log(this.tokenProvider.getUserInfo()["id"] + " " + this.ans.owner.id );
  }

  // check if this user has permission to edit answer
  hasPermission(): boolean {
    return this.tokenProvider.getUserInfo()["id"] === this.ans.owner.id;
  }

  cancelEdit(): void {
    this.isEditing =  false;
  }
  onEdit(): void {
    this.isEditing =  true;
  }

}
