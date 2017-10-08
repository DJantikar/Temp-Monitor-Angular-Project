import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class TemperatureMonitorService {

temperatures :number[] = [];
temperaturesChanged = new Subject<number[]>();

  recordTemperature(t : number){
    this.temperatures.push(t);
    console.log(this.temperatures)
    this.temperaturesChanged.next(this.temperatures.slice());
  }
  getTemperatures(){
    return this.temperatures.slice();
  }
  clear(){
    this.temperatures=[];
    this.temperaturesChanged.next(this.temperatures.slice());
  }
  
}
