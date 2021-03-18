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
  usermessage:string;
  date_msg:string;
  total_coursecount:number;
  providerName:string;
  course_count:number=0;
  ProviderCount:number=0;
  courseId:number;
  Course_Name:string;
  Provider:string;
  Course_child:string;
  CourseUrl: string;
  provider_final_removeduplicate:any=[];
  provider_final_removeduplicate2:any=[];
  provider_final_removeduplicate3:any=[];
  sub_array:any=[];
  sub_array2:any=[];
  child_final_removeduplicates:any=[];
  child_final_removeduplicates2:any=[];
  child_final_removeduplicates3:any=[];
  constructor(private Jsonplaceholder:JsonplaceholderService ) { 
    this.data=new Array<any>()
    
  }

  //this function is to count the total number of courses in json
  gettotalcoursecount()
  {
    this.Jsonplaceholder.getData().subscribe((data)=>{
      this.total_coursecount=data.length;
    })
  }
  //this function filters the child subject removes all the duplicates
  getDataFromAPI()
  {
    this.Jsonplaceholder.getData().subscribe((data)=>{
      this.data=data
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
            this.child_final_removeduplicates[i]=this.sub_array[j];
          }
        }
        if(this.child_final_removeduplicates[i]!=this.sub_array[i])
        { 
            this.child_final_removeduplicates2[i]=this.sub_array[i];          
        }
      }
      let index=0;
      for(let i=0;i<this.child_final_removeduplicates2.length;i++)
      {
        if(this.child_final_removeduplicates2[i]!=undefined)
        {
          this.child_final_removeduplicates3[index]=this.child_final_removeduplicates2[i];
          index++;
        }
      }
      
    })
  }
   
  //this function filters the provider removes all the duplicates
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
            this.provider_final_removeduplicate[i]=this.sub_array2[j];
          }
        }
        if(this.provider_final_removeduplicate[i]!=this.sub_array2[i])
        {
            this.provider_final_removeduplicate2[i]=this.sub_array2[i];          
        }
      }
      let index=0;
      for(let i=0;i<this.provider_final_removeduplicate2.length;i++)
      {
        if(this.provider_final_removeduplicate2[i]!=undefined)
        {
          this.provider_final_removeduplicate3[index]=this.provider_final_removeduplicate2[i];
          index++;
        }
      }
    })
  }

  //course count based on user select the provider
  getprovider(value:string){
    this.ProviderCount=0;
    this.providerName=value;
    for(let d of this.data)
    {
      if(value==d['Provider'])
      {
        this.ProviderCount+=1;
      }
    }
  }

  //course count based on child subject
  getCourse(value:string){
    this.usermessage=value;
    this.course_count=0;
    for(let d of this.data)
    {
      if(value==d['Child Subject'])
      {
        this.course_count+=1;
      }
    }
  }

  //list of course based on the next session date
  getDate(value:any)
  {
    this.Jsonplaceholder.getData().subscribe((data)=>{
      this.data=data
    })
    this.date_msg=value;
    for(let d of this.data)
    {
      if(value==d['Next Session Date'])
      {
        this.courseId=d['Course Id'];
        this.Course_Name=d['Course Name'];
        this.Provider=d['Provider'];
        this.CourseUrl=d['Url'];
        this.Course_child=d['Child Subject'];
      }
    }
  }
  ngOnInit(): void {
    this.gettotalcoursecount();

  }

}
