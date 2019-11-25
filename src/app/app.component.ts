import { Component, OnInit } from '@angular/core';
import { ServerMetricsService } from './services/serverMetrics/server-metrics.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  dataSource:     any;
  
  constructor(private svcMetrics : ServerMetricsService) {
     
      this.getDataSvc();  
      //this.getDataNoSvc();
    }
 
  getDataNoSvc(): any {
    this.dataSource = {
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",
        subCaption: "In MMbbl = One Million barrels",
        xAxisName: "Country",
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        theme: "fusion"
      },
      // Chart Data
      data: [
        {
          label: "Venezuela",
          value: "290"
        },
        {
          label: "Saudi",
          value: "260"
        }
      ]
    }; // end of this.dataSource

  }


  getDataSvc():any {
    this.svcMetrics.getChart().subscribe(xdata => {
        this.dataSource = xdata;
         
      })
  }


ngOnInit() {}
} // end of class AppComponent