import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NavComponent } from './nav/nav.component';
import { DiaryComponent } from './diary/diary.component';
import { DailypageComponent } from './dailypage/dailypage.component';
import { DailypageEditComponent } from './dailypage-edit/dailypage-edit.component';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { BusinessComponent } from './business/business.component';
import { TechComponent } from './tech/tech.component';
import { SportsComponent } from './sports/sports.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { HttpClientModule} from '@angular/common/http';
import { GeneralNewsComponent } from './general-news/general-news.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpenseComponent } from './expense/expense.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './budget-item-list/budget-item-card/budget-item-card.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    MainComponent,
    SidemenuComponent,
    NavComponent,
    DiaryComponent,
    DailypageComponent,
    DailypageEditComponent,
    NewsComponent,
    EntertainmentComponent,
    BusinessComponent,
    TechComponent,
    SportsComponent,
    HealthComponent,
    ScienceComponent,
    GeneralNewsComponent,
    ExpenseComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
    

  ]
})
export class MainModule { }
