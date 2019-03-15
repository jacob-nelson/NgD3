import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'ng-d3-bar-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {
  @ViewChild('barChart')
  private chartContainer: ElementRef;

  @Input()
  data: [];

  @Input()
  xAxis: string;

  @Input()
  yAxis: string;

  @Input()
  options;

  margin = { top: 20, right: 20, bottom: 30, left: 40 };
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (!this.data) { return; }

    this.createBarChart();
  }

  onResize() {
    if (!this.data) { return; }
    this.createBarChart();
  }

  private createBarChart(): void {
    let xAxis = this.xAxis;
    let yAxis = this.yAxis;
    let options = this.options;
    let width;
    let height;

    d3.select('#evcmBarChart').remove();

    const element = this.chartContainer.nativeElement;

    let ratio = 0.5;
    width = (options && options.width) ? options.width : element.offsetWidth;
    height = width * ratio;

    const data = this.data;

    let viewBox = '0 0 ' + width + ' ' + height;
    const svg = d3.select(element).append('svg')
      .attr('id', 'evcmBarChart')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', viewBox)
      .attr('preserveAspectRatio', 'xMinYMin meet');

    const contentWidth = width - this.margin.left - this.margin.right;
    const contentHeight = height - this.margin.top - this.margin.bottom;

    const x = d3
      .scaleBand()
      .rangeRound([0, contentWidth])
      .padding(0.1)
      .domain(data.map(d => d[xAxis]));

    const y = d3
      .scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, d3.max(data, d => d[yAxis])]);

    const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(x));

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(10, '%'))

    let transformDiff = (this.margin.left / 2) + 5;
    let transformY = width / 10;
    let transformX = (height / 10) + transformDiff;
    if ((transformY - transformX) < transformDiff)
      transformX = transformY - transformDiff;
    let transformOrigin = transformX + ' ' + transformY;

    g.append('g')
      .append('text')
      .attr('id', 'yTitle')
      .attr('text-anchor', 'end')
      .attr('transform', 'rotate(-90)')
      .attr('transform-origin', transformOrigin)
      .text('Frequency');

    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d[xAxis]))
      .attr('y', d => y(d[yAxis]))
      .attr('width', x.bandwidth())
      .attr('height', d => contentHeight - y(d[yAxis]));
  }

}
