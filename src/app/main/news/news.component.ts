import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  rocketsFromService  :any[] = []
  items: any[] = [
    {id:0, name:'General'},
    { id: 1, name: 'Technology' },
    { id: 2, name: 'Health' },
    { id: 3, name: 'Sports' },
    { id: 4, name: 'Entertainment' },
    { id: 5, name: 'Business' },
    { id: 6, name: 'Science' }
  ];
  selected: number = 0;


  news : any[] = []
  constructor(private newsapi:NewsapiService) { }

  ngOnInit(): void {

    // this.newsapi.getRockets().subscribe(data=> this.rocketsFromService = data)
    this.newsapi.getNews().subscribe(data=>{console.log(data.articles);
      this.news = data.articles 
          }) 
   }


  selectOption(id: number) {
  

    console.log(this.selected)

    
    if(this.selected == 1){

      this.newsapi.getTechNews().subscribe(data=>{console.log(data.articles);
        this.news = data.articles 
            })
        }

    else if(this.selected == 2){

          this.newsapi.getHealthNews().subscribe(data=>{console.log(data.articles);
            this.news = data.articles 
                })
            }

          
      else if(this.selected == 3){

        this.newsapi.getSportsNews().subscribe(data=>{console.log(data.articles);
          this.news = data.articles 
              })

      }

      else if(this.selected == 4){
        this.newsapi.getEntertainmentNews().subscribe(data=>{console.log(data.articles);
          this.news = data.articles 
              }) 
      }

      else if(this.selected == 5){
        this.newsapi.getBusinessNews().subscribe(data=>{console.log(data.articles);
          this.news = data.articles 
              }) 
      }

      else if(this.selected == 6){
        this.newsapi.getScienceNews().subscribe(data=>{console.log(data.articles);
          this.news = data.articles 
              }) 
      }

      else if(this.selected == 0){

        this.newsapi.getNews().subscribe(data=>{console.log(data.articles);
          this.news = data.articles 
              }) 
      }

    }
 }


    
   
  

  

  

  


