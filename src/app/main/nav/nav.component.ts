import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  items: any[] = [
    {id:0, name:'general'},
    { id: 1, name: 'tech' },
    { id: 2, name: 'health' },
    { id: 3, name: 'sports' },
    { id: 4, name: 'entertainment' },
    { id: 5, name: 'business' },
    { id: 6, name: 'science' }
  ];
  selected: number = 0;


  news : any[] = []
  constructor(private newsapi:NewsapiService) { }

  ngOnInit(): void {
    this.newsapi.getNews().subscribe(data=>{console.log(data.articles);
      this.news = data.articles 
          }) 
   }


  selectOption(id: number) {
    //getted from event
    
    //getted from binding
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
