import { SignupComponent } from './signup/signup.component';
import { SigniinComponent } from './signiin/signiin.component';
import { HomeComponent } from './home/home.component';
import { AppContentComponent } from './core/components/app-content/app-content.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncomeComponent } from './income/income.component';
import { ReportComponent } from './report/report.component';
import { ExpenseComponent } from './expense/expense.component';
import { AuthGuard } from './core/guards/auth-guard/auth.guard';
import { NotAuthenticatedComponent } from './not-authenticated/not-authenticated.component';


const routes: Routes = [
  {
    path: '',
    component: AppContentComponent,
    children: [{
      path: '',
      component: HomeComponent
    },
    {
      path: 'login',
      component: SigniinComponent,
      // canActivate: [ AuthGuard ]
    },
    {
      path: 'signup',
      component: SignupComponent,
    },
    {
      path: 'incomes',
      component: IncomeComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'expenses',
      component: ExpenseComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'report',
      component: ReportComponent,
      canActivate: [AuthGuard]
    },
    {
      path:'notAuthenticated',
      component: NotAuthenticatedComponent,
    },
    {
      path: '**', redirectTo: '' 
    }
    ]
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
