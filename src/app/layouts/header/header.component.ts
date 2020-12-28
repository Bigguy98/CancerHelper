import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateAccountModalComponent } from '../modals/update-account-modal/update-account-modal.component';
import { TokenProvider } from '../utils/jwt-token.util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toogle = new EventEmitter();

  constructor(private tokenProvider: TokenProvider,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  logout(): void {
    if (confirm("Bạn có chắc muốn đăng xuất?")) {
      this.tokenProvider.clearStorage();
      this.router.navigate(["/login"]);
    }
  }

  openAccountModal(): void {
    const modalRef = this.modalService.open(UpdateAccountModalComponent, {
      keyboard: true,
      backdrop: 'static',
      size: 'lg'
    });

    modalRef.result.then(
      () => {
        // on modal success
        console.log('modal success!');
      },
      () => {
        console.log('modal dismiss');
      }
    );
  }

}
