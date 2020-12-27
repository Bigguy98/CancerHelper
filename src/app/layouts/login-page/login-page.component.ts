import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';
import { TokenProvider } from '../utils/jwt-token.util';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username = "";
  pwd = "";

  constructor(private toastr: ToastrService,
    private commonService: CommonService,
    private tokenService: TokenProvider,
    private router: Router) { }

  ngOnInit() {
  }

  submitLogin(): void {
    if (! this.username) {
      this.toastr.warning("Bạn chưa điền tên tài khoản!", "warning message");
      return;
    }

    if (! this.pwd) {
      this.toastr.warning("Bạn chưa điền mật khẩu!", "warning message");
      return;
    }
    
    this.commonService.authenticate({
      "username": this.username,
      "password": this.pwd
    }).subscribe((response: any) => {
      const token = response.body.id_token;
      if (token) {
        
        this.tokenService.saveToken(token);
        this.router.navigate([""]);
        this.getUserInfo();
      }
      
    }, () => {
      this.toastr.error("Tài khoản không tồn tại!");
    })
    
  }

  getUserInfo(): void {
      this.commonService.getUserInfo().subscribe((response: HttpResponse<any>) => {
        this.tokenService.saveUserInfo(JSON.stringify(response.body));
      })
  }

}
