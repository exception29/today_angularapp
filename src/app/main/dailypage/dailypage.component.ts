import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-dailypage',
  templateUrl: './dailypage.component.html',
  styleUrls: ['./dailypage.component.css']
})
export class DailypageComponent implements OnInit {

 
  date:string ="";
  title:string = ""
  description : string ="";
  image:string =""

  constructor(private diaryapi:DiaryService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    const data = {
      date :this.date,
      title : this.title,
      description: this.description,
      image : this.image

    }

    this.diaryapi.create(data).subscribe(
      () => {
        this.router.navigate(['/diary'])
      }
    );
  }
}
