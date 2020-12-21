import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-survival-month',
  templateUrl: './survival-month.component.html',
  styleUrls: ['./survival-month.component.scss']
})
export class SurvivalMonthComponent implements OnInit {

  TYPE = 'sm'; 

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getStatistic(this.TYPE).subscribe((response: any) => {
        const data = response.body;
        this.processData(data);
    }) 
  }

  processData(data: any[]) {
    data = data.filter((elem: any) => elem.age_range >= 5);

    const maleData = data.map((elem: any) => elem.maleAvg);
    const femaleData = data.map((elem: any) => elem.femaleAvg);
    this.loadCharts(maleData, femaleData);
  }

  loadCharts(maleData, femaleData): void {
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
            data: maleData
    
        }, {
            name: 'Female',
            data: femaleData
        }]
    }
    Highcharts.chart("container", option); // container is the id of figure component
  }

}
