import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  private  url : string = 'https://api.spacexdata.com/v4/rockets'
  private newsurl :string = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1ab76054ee864e8ca10c9f1e3f3a6679"

  //india entertainment
  private newsentertainmenturl:string = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1ab76054ee864e8ca10c9f1e3f3a6679"
 //india business
 private newsbusinessurl:string = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1ab76054ee864e8ca10c9f1e3f3a6679"
  
 private newshealthurl:string = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=1ab76054ee864e8ca10c9f1e3f3a6679"

 private newssportsurl:string = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1ab76054ee864e8ca10c9f1e3f3a6679"
 
 private newsscienceurl:string = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=1ab76054ee864e8ca10c9f1e3f3a6679"
 

 private newstechurl:string = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1ab76054ee864e8ca10c9f1e3f3a6679"
 
 constructor(private http  : HttpClient) { }

 getTechNews():Observable<any>{
  return this.http.get(this.newstechurl)
}
  
  getNews(): Observable<any>{
    return this.http.get(this.newsurl)
  }

  getEntertainmentNews():Observable<any>{
    return this.http.get(this.newsentertainmenturl)
  }

  getBusinessNews():Observable<any>{
    return this.http.get(this.newsbusinessurl)
  }

  getHealthNews():Observable<any>{
    return this.http.get(this.newshealthurl)
  }

  getSportsNews():Observable<any>{
    return this.http.get(this.newssportsurl)
  }
  getScienceNews():Observable<any>{
    return this.http.get(this.newsscienceurl)
  }
  
  getRockets():Observable<any>{
    return this.http.get(this.url)

  }

}
