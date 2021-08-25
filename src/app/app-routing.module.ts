import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './main/business/business.component';
import { DailypageEditComponent } from './main/dailypage-edit/dailypage-edit.component';
import { DailypageComponent } from './main/dailypage/dailypage.component';
import { DiaryComponent } from './main/diary/diary.component';
import { EntertainmentComponent } from './main/entertainment/entertainment.component';
import { ExpenseComponent } from './main/expense/expense.component';
import { GeneralNewsComponent } from './main/general-news/general-news.component';
import { HealthComponent } from './main/health/health.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './main/news/news.component';
import { ScienceComponent } from './main/science/science.component';
import { SportsComponent } from './main/sports/sports.component';
import { TechComponent } from './main/tech/tech.component';

const routes: Routes = [
  {path: '', component:MainComponent,
children:[
  {path: 'diary', component:DiaryComponent},
  {path:'diary/dailypage', component:DailypageComponent},
  {path:'diary/:id/edit', component:DailypageEditComponent},
  {path:'budget', component:ExpenseComponent},
  {path:'news',component:NewsComponent,

// children:[
//   {path:'entertainment',component:EntertainmentComponent},
//   {path:'',component:GeneralNewsComponent},
//   {path:'business',component:BusinessComponent},
//   {path:'sports',component:SportsComponent},
//   {path:'health',component:HealthComponent},
//   {path:'science',component:ScienceComponent},
//   {path:'tech',component:TechComponent},


// ]
}
]}


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
