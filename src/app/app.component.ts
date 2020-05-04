import { Component } from '@angular/core';
import { RGB } from './interfaces/RGB';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'AngularCounter';
  color:RGB = {
    red: 100,
    green: 127,
    blue: 155
  } 

  red:string='Red';

  stylesList:object;

  ngOnInit() {
    this.setColor();
  }

  // blah = function(num:number) {
  //   console.log("Received from child: " + num);
  // }


  changeRed = function(num:number) {
    this.color.red = num;
    this.setColor();
  }

  changeGreen = function(num:number) {
    this.color.green = num;
    this.setColor();
  }

  changeBlue = function(num:number) {
    this.color.blue = num;
    this.setColor();
  }

  setColor = function() {
    this.stylesList = {
      'background-color': `rgb(${this.color.red},${this.color.green},${this.color.blue})`,
      width: '400px',
      height: '400px'
    }
  }
  
}
