import { Component,OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit
{ 
  str="";
  constructor(private  number:NumberService){}
  ngOnInit() {
      this.str=this.number.Chkprime(47);
  }
}
