import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  news : any[] = []
  constructor(private newsapi:NewsapiService) { }

  ngOnInit(): void {

    this.newsapi.getEntertainmentNews().subscribe(data=>{console.log(data.articles);
      this.news = data.articles 
    })
  }

}
