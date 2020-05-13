import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting'

@Component({
  selector: 'app-mat-cards',
  templateUrl: './mat-cards.component.html',
  styleUrls: ['./mat-cards.component.scss']
})

export class MatCardsComponent implements OnInit {


  @Input() label : string;
  @Input() total : string;
  @Input() percentage : string;
  
  @Input() Carddata = [];
  Highcharts = Highcharts;


  chartOptions = {};

  constructor() { }

  ngOnInit()
  {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor:null,
        borderWidth:0,
        margin:[2,2,2,2],
        height:60

    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    
    tooltip: {
        split: true,
        outside : true
    },
    

    legend: {
      enabled:false
    },
    

    exporting:{
        enabled : false,
    },
    credits:{
      enabled : false,
    },

    xAxis:{
      labels:{
        enables:false,
      },
      title:{
        text:null
      },
      startOnTick : false,
      endOnTick: false,
      tickOoptions:[]
    },

    yAxis:{
      labels:{
        enables:false,
      },
      title:{
        text:null
      },
      startOnTick : false,
      endOnTick: false,
      tickOoptions:[]
    },


    series: [{
       data : this.Carddata
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
