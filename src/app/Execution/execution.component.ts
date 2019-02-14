import { Component, OnInit } from '@angular/core';
export interface sourcetechnology {
  valuest: string;
  viewValuest: string;
}
export interface generalmodel {
  valuesgm: string;
  viewValuegm: string;
}
export interface prioritymodel {
  valuepm: string;
  viewValuepm: string;
} 
@Component({
  selector: 'execution',
  templateUrl: './execution.component.html',
  styleUrls: ['./execution.component.css']
})
export class ExecutionComponent implements OnInit {

  constructor() { }
  breakpoint: number;
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 700) ? 2 : 6;
    console.log(this.breakpoint);
}

onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 700) ? 2 : 6;
  console.log(this.breakpoint);

}
   srcs: sourcetechnology[] = [
    { valuest: 'c#-0', viewValuest: 'C#' },
    { valuest: 'java-1', viewValuest: 'Java' },
  ];
  genmodels: generalmodel[] = [
    { valuesgm: 'yes-0', viewValuegm: 'Yes' },
    { valuesgm: 'no-1', viewValuegm: 'No' },
  ];
  priorimodels: prioritymodel[] = [
    { valuepm: 'level-0', viewValuepm: 'Class Level' },
    { valuepm: 'level-1', viewValuepm: 'Consolidated Level' },
  ];
}
