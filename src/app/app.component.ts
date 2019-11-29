import { Component } from '@angular/core';
import{Course} from './course.model'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lab1';
  //Properties
  cname:string="Angular 7";
  cost:number=20000;
  trainer:string="Srinivas Dande";
  startDate:Date=new Date();
  isOnline:boolean=false;

  //Objects
  course:Course={
    cname:"Angular 7",
    cost:20000,
    trainer:"Chandan Kumar",
    duration:"25Hrs",
  }
  //Arrays
  courseNames :string[]=["Angular 7","Node JS","MongoDB","Express JS","React JS"];

  //Lists
  mycourses:Course[]=[
    {cname:"Angular 7",cost:10000, trainer:"Chandan", duration:"25Hrs"},
    {cname:"Node JS",cost:8000, trainer:"Kumar", duration:"10Hrs"},
    {cname:"MongoDB",cost:7000, trainer:"Rai", duration:"8Hrs"},
    {cname:"Express JS",cost:6000, trainer:"Manish", duration:"18Hrs"},
    {cname:"React JS",cost:5000, trainer:"Shankar", duration:"12Hrs"}
  ];

  showMessage1(){
    alert("You clicked on Button");
  }
  showMessage2(name:string,email:string){
    alert("Hi"+name+"Your Email is"+email);
  }
  getCourseInfo(course:Course){
    alert("Hi Course name"+course.cname+"Cost:"+course.cost);
  }
}
