import { JsonplaceholderService } from './../jsonplaceholder.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {NgbAlertConfig,NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-courses-listing',
  templateUrl: './courses-listing.component.html',
  styleUrls: ['./courses-listing.component.css'],
  providers: [NgbAlertConfig]

})
export class CoursesListingComponent implements OnInit {
  model:NgbDateStruct;
  data:Array<any>;
  msg:String;
  msg1:string;
  count:number=0;
  courseId:number;
  Course_Name:string;
  Provider:string;
  CourseUrl: string;
  constructor(private Jsonplaceholder:JsonplaceholderService ) { 
    this.data=new Array<any>()
    
  }

  getDataFromAPI()
  {
    this.Jsonplaceholder.getData().subscribe((data)=>{
      // console.log(data)
      this.data=data
    })
  }

  getCourse(value:string){
    this.msg=value;
    this.count=0;
    // console.log(value);
    for(let d of this.data)
    {
      if(value==d['Child Subject'])
      {
        this.count+=1;
      }
    }
  }

  getDate(value:any)
  {
    this.Jsonplaceholder.getData().subscribe((data)=>{
      this.data=data
    })
    this.msg1=value;
    for(let d of this.data)
    {
      //console.log(d['Next Session Date']);
      if(value==d['Next Session Date'])
      {
        console.log(d);
        this.courseId=d['Course Id'];
        this.Course_Name=d['Course Name'];
        this.Provider=d['Provider'];
        this.CourseUrl=d['Url'];
      }
    }
    console.log(this.msg1);
  }
  ngOnInit(): void {
  }

}
