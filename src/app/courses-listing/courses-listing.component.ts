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
  provider_final:any=[];
  provider_final2:any=[];
  sub_array:any=[];
  sub_array2:any=[];
  final_array:any=[];
  final_array2:any=[];
  CourseUrl: string;
  constructor(private Jsonplaceholder:JsonplaceholderService ) { 
    this.data=new Array<any>()
    
  }

  getDataFromAPI()
  {
    this.Jsonplaceholder.getData().subscribe((data)=>{
      // console.log(data)
      this.data=data
      // for(let d of data)
      // {
      //   this.data=d['Course Name'].length;
      // }
      console.log(this.data);
      for(let i=0;i<data.length;i++)    
      {
        this.sub_array[i]=this.data[i]['Child Subject'];
      }
      for(let i=0;i<this.sub_array.length;i++)
      {
        for(let j=0;j<i;j++)
        {
          if(this.sub_array[i]==this.sub_array[j])
          {
            this.final_array[i]=this.sub_array[j];
          }
        }
        if(this.final_array[i]!=this.sub_array[i])
        {
          if(this.sub_array[i]!="")
          {
            this.final_array2[i]=this.sub_array[i];          
          }
        }
      }
      // for(let i=0;i<this.final_array2.length;i++)
      // {
      //   console.log(this.final_array2[i]);
      // }
    })
  }
  getproviderFromAPI()
  {
    this.Jsonplaceholder.getData().subscribe((data)=>{
      // console.log(data)
      this.data=data
      for(let i=0;i<data.length;i++)    
      {
        this.sub_array2[i]=this.data[i]['Provider'];
      }
      for(let i=0;i<this.sub_array2.length;i++)
      {
        for(let j=0;j<i;j++)
        {
          if(this.sub_array2[i]==this.sub_array2[j])
          {
            this.provider_final[i]=this.sub_array2[j];
          }
        }
        if(this.provider_final[i]!=this.sub_array2[i])
        {
            this.provider_final2[i]=this.sub_array2[i];          
        }
      }
      // for(let i=0;i<this.provider_final2.length;i++)
      // {
      //   console.log(this.provider_final2[i]);
      // }
    })
  }

  getprovider(value:string){
    // this.msg=value;
    this.count=0;
    // console.log(value);
    for(let d of this.data)
    {
      if(value==d['Provider'])
      {
        this.count+=1;
      }
    }
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
      // if(value==d['Provider'])
      // {
      //   this.count+=1;
      // }
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
        // console.log(d);
        this.courseId=d['Course Id'];
        this.Course_Name=d['Course Name'];
        this.Provider=d['Provider'];
        this.CourseUrl=d['Url'];
      }
    }
    // console.log(this.msg1);
  }
  ngOnInit(): void {
  }

}