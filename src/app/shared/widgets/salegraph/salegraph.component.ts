import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting'

@Component({
  selector: 'app-salegraph',
  templateUrl: './salegraph.component.html',
  styleUrls: ['./salegraph.component.scss']
})
export class SalegraphComponent implements OnInit {

  Highcharts = Highcharts;

  chartOptions = {};

  constructor(){
  }

  ngOnInit() {

    this.chartOptions = 
    {

      title: {
        text: ''
      },

    subtitle: {
        text: ''
      },

      credits :{
        enabled:false
      },

      exporting:{
        enabled : true
      },

        xAxis: {
            categories: ['Location 01', 'Location 02', 'Location 03', 'Location 04', 'Location 05']
        },

        series: [{
            type: 'column',
            colorByPoint: true,
            data: [29.9, 71.5, 106.4, 129.2, 144.0],
            showInLegend: false
        }]
    };

    HC_exporting(Highcharts);
    
    setTimeout(() => 
    {
      window.dispatchEvent(
        new Event('resize')
      );
    },300)

  }

  }

