import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  news : any[] = []
  constructor(private newsapi:NewsapiService) { }

  ngOnInit(): void {

    this.newsapi.getTechNews().subscribe(data=>{console.log(data.articles);
      this.news = data.articles 
    })
  }

}