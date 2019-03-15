# NgD3

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Installation

Run `npm i @jacobnelson/ng-d3` from command prompt

## How to include NgD3 in your Application?

- open app.module.ts file
- import module using the command `import { NgD3Module } from '@jacobnelson/ng-d3';`
- add to `imports` in `@NgModule`.  
Your final code should look like this.  


```import { NgModule } from "@angular/core";  
import { AppComponent } from "./app.component";  
import { NgD3Module } from '@jacobnelson/ng-d3';  

@NgModule({  
  declarations: [  
    AppComponent  
  ],  
  imports: [  
    NgD3Module  
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }
```

## Drawing Bar Chart

```<ng-d3-bar-chart  
  [data]="data | async"  
  [xAxis]="'letter'"  
  [yAxis]="'frequency'"  
  [options]="chartOptions">  
</ng-d3-bar-chart>```  

- data: the data to be plotted in Bar Chart. must be an array of objects.
- xAxis: key/value from data to be considered to plot xAxis of the graph
- yAxis: key/value from data to be considered to plot yAxis of the graph
- options: An object which holds other options. Currently only width and label texts are supported. height of the graph will be proportional to width.

```chartOptions = {  
  'width': '700',  
  'label': {  
    'x': 'letter',  
    'y': 'frequency'  
  }  
}```  
