import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting'

@Component({
  selector: 'app-fastmoving-graph',
  templateUrl: './fastmoving-graph.component.html',
  styleUrls: ['./fastmoving-graph.component.scss']
})
export class FastmovingGraphComponent implements OnInit {

  Highcharts = Highcharts;

  chartOptions = {};

  constructor() { }

  ngOnInit(){

    this.chartOptions = {
      chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },

    credits :{
      enabled:false
    },

    exporting:{
      enabled : true
    },

    xAxis: {
        categories: ['Item 01', 'Item 02', 'Item 03', 'Item 04', 'Item 05']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [ {
        name: 'fast moving items',
        data: [4, 3.5, 3, 2.4, 1]
    }]
}
    }
    
  }

