import { NgModule } from '@angular/core';
import { NgD3Component } from './ng-d3.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [NgD3Component, BarChartComponent],
  imports: [
  ],
  exports: [NgD3Component, BarChartComponent]
})
export class NgD3Module { }
