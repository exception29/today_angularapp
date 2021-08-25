import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  news : any[] = []
  constructor(private newsapi:NewsapiService) { }

  ngOnInit(): void {

    this.newsapi.getScienceNews().subscribe(data=>{console.log(data.articles);
      this.news = data.articles 
    })
  }

}