import { Component,OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit
{  Cnt=0;
  constructor(private string:StringService)
  {

  }

  ngOnInit() {
      this.Cnt=this.string.CountCapital("Marvellous Infosystems");
  }
}
