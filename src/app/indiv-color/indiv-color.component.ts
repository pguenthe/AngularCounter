import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-indiv-color',
  templateUrl: './indiv-color.component.html',
  styleUrls: ['./indiv-color.component.css']
})
export class IndivColorComponent implements OnInit {
  @Input() count:number;
  @Input() title:string;
  @Output() changed = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  increment = function() {
    if (this.count < 255) {
      this.count++;
    }
    this.changed.emit(this.count);
  }

  decrement = function() {
    if (this.count > 0) {
      this.count --;
    }
    this.changed.emit(this.count);
  }

  increase5 = function() {
    if (this.count <= 250) {
      this.count += 5
    } else {
      this.count = 255;
    } 
    this.changed.emit(this.count);
  }

  decrease5 = function() { 
    if (this.count >= 5) {
      this.count -= 5
    } else {
      this.count = 0;
    } 
    this.changed.emit(this.count);
  };


  // increment = () => { if (this.count < 255) this.count++ };
  // decrement = () => { if (this.count > 0) this.count-- };
  // increase5 = () => { 
  //   if (this.count <= 250) {
  //     this.count += 5
  //   } else {
  //     this.count = 255;
  //   } 
  // };
  // decrease5 = () => { 
  //   if (this.count >= 5) {
  //     this.count -= 5
  //   } else {
  //     this.count = 0;
  //   } 
  // };
}
