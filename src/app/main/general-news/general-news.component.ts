import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-general-news',
  templateUrl: './general-news.component.html',
  styleUrls: ['./general-news.component.css']
})
export class GeneralNewsComponent implements OnInit {

  news : any[] = []
  constructor(private newsapi:NewsapiService) { }

  ngOnInit(): void {

    this.newsapi.getNews().subscribe(data=>{console.log(data.articles);
      this.news = data.articles 
    })
  }

}

