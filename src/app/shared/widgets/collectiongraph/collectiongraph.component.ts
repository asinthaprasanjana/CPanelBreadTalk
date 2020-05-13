import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting'


@Component({
  selector: 'app-collectiongraph',
  templateUrl: './collectiongraph.component.html',
  styleUrls: ['./collectiongraph.component.scss']
})
export class CollectiongraphComponent implements OnInit {

  Highcharts = Highcharts;

  chartOptions = {};

  constructor() { }

  ngOnInit(){
    this.chartOptions = {
      chart: {
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            'Amount (Rs): <b>{point.y}</b><br/>'
    },
    
    credits :{
      enabled:false
    },

    exporting:{
      enabled : true
    },

    series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'collections',
        data: [{
            name: 'CASH',
            y: 505370,
            
        }, {
            name: 'CREDIT',
            y: 551500,
            
        }, {
            name: 'CHEQUE',
            y: 312685,
           
        }, {
            name: 'VOUCHER',
            y: 78867,
            
        }]
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

