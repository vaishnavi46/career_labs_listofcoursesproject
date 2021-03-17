import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    const url="https://nut-case.s3.amazonaws.com/coursessc.json"

    return this.http.get<any>(url)
  }
}
