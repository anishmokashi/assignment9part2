import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  public CountCapital(str:string)
  {
    var count=0,len=str.length;
  for(var iCnt=0;iCnt<len;iCnt++) {
    if(/[A-Z]/.test(str.charAt(iCnt))) count++;
  }
  return count;
}
  }
