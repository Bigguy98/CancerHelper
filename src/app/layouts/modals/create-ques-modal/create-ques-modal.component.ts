import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';
import { TokenProvider } from '../../utils/jwt-token.util';

@Component({
  selector: 'app-create-ques-modal',
  templateUrl: './create-ques-modal.component.html',
  styleUrls: ['./create-ques-modal.component.scss']
})
export class CreateQuesModalComponent implements OnInit {

  title= "";
  content= "";
  hashtag = "";
  constructor(public activeModal: NgbActiveModal,
    private commonService: CommonService,
    private toastService: ToastrService,
    private tokenService: TokenProvider) { }

  ngOnInit() {
  }

  dismiss(): void {
    this.activeModal.dismiss();
  }

  saveQuestion(): void {

    const entity = {
      "content": this.content,
      "hashtag": "#test",
      "owner": {
        "id": this.getUserId()
      },
      "status": 1,
      "title": this.title
    }

    this.commonService.createQuestion(entity).subscribe((response: HttpResponse<any>) => {
      if (response.body.code === 0) {
        this.toastService.success(response.body.message);
        this.refresh();
      }
    }, () => {
      this.toastService.info("Đã có lỗi xảy ra, vui lòng thử lại!","Error!");
    })

  }

  refresh(): void {
    this.title= "";
    this.content= "";
    this.hashtag = "";
    this.activeModal.close();
  }


  getUserId(): string {
    const userInfo = this.tokenService.getUserInfo();
    return userInfo["id"];
  }
}
