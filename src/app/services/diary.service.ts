import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diary } from '../interfaces/diary';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  apiUrl = "http://localhost:3000/diary"

  constructor(private http:HttpClient) { }

  all():Observable<Diary[]>{
          return this.http.get<Diary[]>(this.apiUrl)
  }

  create(data:any):Observable<Diary[]>{
    return this.http.post<Diary[]>(this.apiUrl, data)
  }

  //single data of page which we are editing
  // id refers to one coming after clicking and is passed from edit page
  get(id:number):Observable<Diary>{

    return this.http.get<Diary>(`${this.apiUrl}/${id}`)

  }


  // on saving edit page, put this modified record into our fake api
  update(id:number, data:any):Observable<Diary>{

    return this.http.put<Diary>(`${this.apiUrl}/${id}`, data)

  }
// deletes thru api 
  delete(id:number){
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }


}
