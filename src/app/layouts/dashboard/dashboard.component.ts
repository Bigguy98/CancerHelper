import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  
  currentToggleStatus: boolean;

  constructor(private navbarService: NavbarService) {
    
  }


  ngOnInit(): void {
    this.navbarService.currentToggleStatus.subscribe(status => {
      this.currentToggleStatus = status;
      this.loadCharts();
    });
    this.loadCharts();
  }

  loadCharts(): void {
    console.log("Loading chart ...")
      const option: any ={
        chart: {
            type: 'column'
        },
        title: {
            text: 'Average survival month of lung cancer patients'
        },
        subtitle: {
            text: 'Source: SEER Data'
        },
        xAxis: {
            categories: [ // age ranges
                '20-24',
                '25-29',
                '30-34',
                '35-39',
                '40-44',
                '45-49',
                '50-54',
                '55-59',
                '60-64',
                '65-69',
                '70-74',
                '75-79',
                '80-84',
                '85-89'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Survival months'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} months</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Male',
            data: [20.96, 13.42, 15.32, 12.55, 14.94, 13.72, 13.44, 13.33, 13.01, 12.81, 12.03, 10.96, 9.09, 6.59]
    
        }, {
            name: 'Female',
            data: [10.85, 19.75, 16.37, 18.46, 17.45, 18.2, 16.7, 16.77, 16.85, 16.55, 14.67, 13.05, 10.82, 7.56]
        }]
    }
    Highcharts.chart("container", option); // container is the id of figure component
  }

  


}
