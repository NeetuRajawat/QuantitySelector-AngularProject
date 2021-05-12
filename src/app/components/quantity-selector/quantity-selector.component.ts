import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.scss']
})
export class QuantitySelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputVal:number=1;
  disableBtn:boolean=false;
  i:number=1;

  increment(){
    this.i++;
    this.inputVal = this.inputVal+1;
    this.disableBtn = false;
  }

  decrement(){
    this.i--;
    this.inputVal = this.inputVal-1;
    if(this.i == 0){
      this.disableBtn = true;
    }
  }
}
