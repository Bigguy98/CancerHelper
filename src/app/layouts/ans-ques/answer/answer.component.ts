import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';
import { TokenProvider } from '../../utils/jwt-token.util';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {


  @Input() ans: any;
  htmlToAdd : any;

  @Output() trigger = new EventEmitter();

  isEditing;
  userId;
  constructor(private tokenProvider: TokenProvider,
    private commonService: CommonService,
    private toastrSerivce: ToastrService) {
    this.isEditing = false;
   }

  ngOnInit() {
    this.htmlToAdd = `<p>${this.ans.content}</p>`;
    
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

  submit(): void {
    const entity = {
      "status": 1,
      "content": this.htmlToAdd,
      "owner": {
        "id": this.ans.owner.id
      },
      "question": {
        "id": this.ans.question.id
      }
    }
    this.commonService.updateAnswer(entity, this.ans.id).subscribe((response: HttpResponse<any>) => {
      if (response.body.code === 0) {
        this.toastrSerivce.success(response.body.message);
        this.isEditing = false;
      } 
    })
  }


  onDeleteAnswer(): void {
    if(confirm("Bạn có chắc muốn xóa?")) {
      this.commonService.deleteAnswer(this.ans.id).subscribe((response: HttpResponse<any>) => {
        if (response.body.code === 0) {
          this.toastrSerivce.success(response.body.message);
          this.trigger.emit("placeholder");
        } 
      })
    }
  }

}
