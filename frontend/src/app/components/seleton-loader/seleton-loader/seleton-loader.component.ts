import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleton-loader',
  templateUrl: './seleton-loader.component.html',
  styleUrls: ['./seleton-loader.component.css']
})
export class SeletonLoaderComponent implements OnInit {
  
  @Input() Cwidth: any;
  @Input() Cheight: any;  
  @Input() circle: any;
  
  constructor() { }
  
  ngOnInit(): void {
    
  }
  
  getMyStyles(){
    const myStyles = {
      'width.px': this.Cwidth ? this.Cwidth : '',
      'height.px': this.Cheight ? this.Cheight : '',
      'border-radius': this.circle ? '50%' : ''
    };
    return myStyles;
    
  }
  
}
