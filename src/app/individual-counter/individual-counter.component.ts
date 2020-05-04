import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-counter',
  templateUrl: './individual-counter.component.html',
  styleUrls: ['./individual-counter.component.css']
})
export class IndividualCounterComponent implements OnInit {

  editMode:boolean = true;
  fontSize:number = 18;

  styleList:object = {
    'font-weight': this.editMode ? 'normal' : 'bold', //ternary operator to make a decision
    'font-size': `${this.fontSize}pt`,//interpolated string to set size with units
    'background-color': 'lightgoldenrodyellow' //literal value
  }
  
  numbers:number[] = [ 23, 55, 60, 78, 91];

  constructor() { }

  ngOnInit(): void {
  }

}
