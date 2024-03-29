import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  
  title = 'cancer-helper';

  opened: boolean = false;

  tools = {
    "parent": "Công cụ",
    "childs": [
      {
        "value": "Dự đoán bệnh",
        'path': '/predict'
      } 
    ]
  }

  statistic = {
    "parent": "Thống kê",
    "childs": [
      {
        "value": "Tháng sống sót",
        'path': '/statistis/sv'
      },
      {
        "value": "Tỉ lệ tử vong",
        'path': '/statistis/dr'
      }   
    ]
  }

  infos = {
    "parent": "Kiến thức chung",
    "childs": [
      {
        "value": "Hiểu thêm về ung thư",
        'path': '/info/ungthu'
      },
      {
        "value": "Dấu hiệu nhận biết bệnh",
        'path': '/info/dauhieunhanbiet'
      },
      {
        "value": "Hiểu rõ hơn về ung thư phổi",
        'path': '/info/ungthuphoi'
      },
      {
        "value": "Hạch bạch huyết",
        'path': '/info/hachbachhuyet'
      },
      {
        "value": "Lý do sưng hạch bạch huyết",
        'path': '/info/lydosunghbh'
      }
      
    ]
  }

  constructor(private navbarService: NavbarService) {
    
  }

  ngOnInit() {
  }


  toogle(): void {
    this.opened = !this.opened;
    this.navbarService.toggleStatusNavbar(this.opened);
  }

}
