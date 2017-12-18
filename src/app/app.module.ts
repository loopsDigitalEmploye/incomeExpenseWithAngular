import { PasswordMatchDirective } from './core/directives/password-match/password-match.directive';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigniinComponent } from './signiin/signiin.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { ReportComponent } from './report/report.component';
import { RlTagInputModule } from 'angular2-tag-input';
import { NotAuthenticatedComponent } from './not-authenticated/not-authenticated.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigniinComponent,
    PasswordMatchDirective,
    IncomeComponent,
    ExpenseComponent,
    ReportComponent,
    NotAuthenticatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    RlTagInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
