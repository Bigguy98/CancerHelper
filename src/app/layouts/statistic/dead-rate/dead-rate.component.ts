import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-dead-rate',
  templateUrl: './dead-rate.component.html',
  styleUrls: ['./dead-rate.component.scss']
})
export class DeadRateComponent implements OnInit {

  TYPE = 'dr';

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getStatistic(this.TYPE).subscribe((response: any) => {
        const data = response.body;
        this.processData(data);
    }) 
  }

  processData(data: any[]) {
    
    const maleDr = data.map((elem: any) => elem.maleDr*100);
    const femaleDr = data.map((elem: any) => elem.femaleDr*100);
    const bothDr = data.map((elem: any) => elem.bothDr*100);

    this.loadCharts(maleDr, femaleDr, bothDr)
  }

  loadCharts(maleDr, femaleDr, bothDr): void {
    const option: any ={
        chart: {
            type: 'column'
        },
        title: {
            text: 'Dead rate of lung cancer patient after a fix time'
        },
        subtitle: {
            text: 'Source: SEER Data'
        },
        xAxis: {
            categories: [ 
                'Sau 1 năm',
                'Sau 2 năm',
                'Sau 3 năm',
                'Sau 4 năm',
                'Sau 5 năm'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Tỉ lệ tử vong'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
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
            data: maleDr
    
        },
        {
            name: 'Female',
            data: femaleDr
        },
        {
          name: 'Both',
          data: bothDr
        }
      ]
    }
    Highcharts.chart("container", option); // container is the id of figure component
  }
}
