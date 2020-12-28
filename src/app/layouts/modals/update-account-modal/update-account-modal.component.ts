import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';
import { TokenProvider } from '../../utils/jwt-token.util';

@Component({
  selector: 'app-update-account-modal',
  templateUrl: './update-account-modal.component.html',
  styleUrls: ['./update-account-modal.component.scss']
})
export class UpdateAccountModalComponent implements OnInit {

  fullName : string;
  email : string;
  pwd: string;

  userInfo: any;

  gender: any;

  // genderList = [
  //   { text : "Nam", id: "1", checked: false},
  //   { text: "Nữ", id: "2", checked: false}
  // ] 

  constructor(public activeModal: NgbActiveModal,
    private tokenProvider: TokenProvider,
    private commonService: CommonService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.userInfo = this.tokenProvider.getUserInfo();
    this.fullName = this.userInfo["fullName"];
    this.email = this.userInfo["email"];

    this.gender = this.userInfo["gender"] === 'MALE' ? 1 : 2;
  }



  dismiss(): void {
    this.activeModal.dismiss();
  }

  submit(): void {
    const entity = {
      id: this.userInfo.id,
      fullName: this.fullName,
      email: this.email,
      gender: this.gender
    }

    if (this.pwd) {
      entity["password"] = this.pwd;
    }

    this.commonService.updateUserInfo(entity).subscribe((response: HttpResponse<any>) => {
      if (response.body.code === 0) {
        this.toastrService.success(response.body.message, "Success!");
        this.reloadUserInfo();
        this.activeModal.close();
      }
    })

  }

  reloadUserInfo(): void {
    this.commonService.getUserInfo().subscribe((response: HttpResponse<any>) => {
      this.tokenProvider.saveUserInfo(JSON.stringify(response.body));
    })
  }

}
