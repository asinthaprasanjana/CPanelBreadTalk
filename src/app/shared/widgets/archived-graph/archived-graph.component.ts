import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting'
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-archived-graph',
  templateUrl: './archived-graph.component.html',
  styleUrls: ['./archived-graph.component.scss']
})
export class ArchivedGraphComponent implements OnInit {


  
  Highcharts = Highcharts;
  

  chartOptions = {};

  constructor() { }

  ngOnInit(){

    this.chartOptions = {

      chart: {
        type: 'solidgauge'
      },
    
      title: {
        text: '',
     },
    
      pane: {
        center: ['50%', '85%'],
        size: '100%',
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc'
        }
      },
    
      credits :{
        enabled:false
      },
  
      exporting:{
        enabled : true
      },
    
      tooltip: {
        enabled: false
      },
    
      // the value axis
      yAxis: {
        stops: [
          [0.9, '#55BF3B'], // green
          [0.5, '#DDDF0D'], // yellow
          [0.1, '#DF5353'] // red
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
          y: -70
        },
        labels: {
          y: 16
        }
      },
    
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
          }
        }
      }
      
    }
    
    // The speed gauge
    var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(this.chartOptions, 
      
      {
          yAxis: {
            min: 0,
            max: 150000,
            title: {
              text: ''
            }
          },
        
          credits: {
            enabled: false
          },
        
          series: [{
            name: 'Covered Amount ( Rs )',
            data: [65250],

            dataLabels: 
            {
              format:
                '<div style="text-align:center">' +
                '<span style="font-size:20px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.9">( Rs )</span>' +
                '</div>'
            },

            tooltip: {
              valueSuffix: ''
            },

          }]

        }));

        HC_exporting(Highcharts);

    setTimeout(() => 
    {
      window.dispatchEvent(
        new Event('resize')
      );
    },300)

    
  
  }
}