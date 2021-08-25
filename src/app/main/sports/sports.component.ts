import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  news : any[] = []
  constructor(private newsapi:NewsapiService) { }

  ngOnInit(): void {

    this.newsapi.getSportsNews().subscribe(data=>{console.log(data.articles);
      this.news = data.articles 
    })
  }

}