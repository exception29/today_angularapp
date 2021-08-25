import { Component, OnInit } from '@angular/core';
import { Diary } from 'src/app/interfaces/diary';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  pages: Diary[] = [];
  page:any
  title:any;

  constructor(private diaryservice:DiaryService) { }

  //we want to load all pages everytime so adding in OnInit
  ngOnInit(): void {

    //pages received added to this.pages
          this.diaryservice.all().subscribe(
            (pages) =>{
              this.pages = pages
            }
          )

  }

  pageDelete(id:number){

    // deletes thru api, but without refreshing the page, to see that deleted from ui , use filter
    
    this.diaryservice.delete(id).subscribe(
      ()=>{
        /* pass single page as param to filter and now it creates array ofonly those pages which are not 
         equal to that if deleted id */
        this.pages = this.pages.filter( p=> p.id!== id)
      }
     
    )

  }
  
  search(){

    if(this.page ==""){
      this.ngOnInit();
    }else{
      this.pages = this.pages.filter(result =>{
        return result.title.toLocaleLowerCase().match(this.page.toLocaleLowerCase())||
       result.description.toLocaleLowerCase().match(this.page.toLocaleLowerCase())||
      result.date.toLocaleLowerCase().match(this.page.toLocaleLowerCase())
   

      })
    }
   
  }



}
