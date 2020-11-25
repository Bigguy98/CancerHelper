import { Component, HostListener } from '@angular/core';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'cancer-helper';

  opened: boolean = false;

  tools = {
    "parent": "Tools",
    "childs": [
      {
        "value": "Prediction",
        'path': 'predict'
      },
      {
        "value": "Dashboard",
        'path': ''
      }
    ]
  }


  infos = {
    "parent": "Infomation",
    "childs": [
      {
        "value": "Lung cancer",
        'path': ''
      },
      {
        "value": "Lymp node",
        'path': ''
      }
    ]
  }

  constructor(private navbarService: NavbarService) {
    
  }


  toogle(): void {
    this.opened = !this.opened;
    this.navbarService.toggleStatusNavbar(this.opened);
  }
}
