import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TemperatureMonitorService } from "app/temperature-monitor.service";
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  progress : number=0;
  isFull : boolean =false;
  temperatures : number[]= []
  @ViewChild('f') tForm : NgForm;
  isCompute:boolean = false;
  currMedian:number;

  ngOnInit(){
    this.temperatures = this.tService.getTemperatures();
    this.progress = this.temperatures.length;
    this.tService.temperaturesChanged.subscribe(
      (temperatures : number[]) => {this.temperatures=temperatures;
                                    this.progress = this.temperatures.length/8 *100;
                                    this.isFull = this.progress<100 ? false : true;}
    );
  }
  constructor(private tService : TemperatureMonitorService){}
  reset(){
    this.isCompute = false;
    this.currMedian = 0;
  }
  onSubmit(){
    this.reset();
    const t = this.tForm.value.temperature;
   // console.log('hi !'+t)
    this.tService.recordTemperature(t);
    this.tForm.reset();
  }
getCurrentMedian(){
    const len = this.temperatures.length;
    if(len==0)
      return;
    let mid = Math.floor(len/2);
    let temp  = this.getTemperatures();
    let median : number ;
    if(len%2==0){
      const ele1 =Number(temp[mid]);
      const ele2 = Number(temp[mid -1]);
      median = (ele1 + ele2)/2;
    }
    else
      median=Number(temp[mid]);
    return median;
}
onCompute(){
   this.isCompute=true;
   this.currMedian = this.getCurrentMedian();
}
getTemperatures(){
  let sortedNums : number[] = this.temperatures.sort((a:number,b:number)=> {return a-b;});
  return sortedNums;
}
getProgress(){
  //console.log('My progress '+ this.progress+'%');
  return this.progress+'%';
}
clear(){
  this.reset();
  this.tService.clear();
}
}
