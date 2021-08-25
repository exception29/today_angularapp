import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-dailypage-edit',
  templateUrl: './dailypage-edit.component.html',
  styleUrls: ['./dailypage-edit.component.css']
})
export class DailypageEditComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(private formBuilder: FormBuilder, private diaryapi:DiaryService,
    private route: ActivatedRoute, private router:Router) { 

    this.form = this.formBuilder.group({

      date:'',
      title: '',
      description: '',
      image: ''
    
    })

    // to get the id that we were redirected to
    this.id = this.route.snapshot.params.id

    //now set the data we got from that id in diaryservice into respective fields for editing
    // we are sending the id to get data
    this.diaryapi.get(this.id).subscribe(
      diary =>this.form.patchValue(diary)
    )
   
  }

  submit(){

    this.diaryapi.update(this.id, this.form.getRawValue()).subscribe(
      ()=>{
        this.router.navigate(['/diary'])
      }
    )

  }

  ngOnInit(): void {
  
    
  }

}
