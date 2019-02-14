import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth/auth.guard';
import { MenuComponent } from './MenuBar/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule} from './material';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './token/token-interceptor.service';
import { ConfigurationComponent } from './Configuration/configuration.component';
import { HomeComponent } from './home/home.component';
import {MatTableModule, MatPaginator } from '@angular/material';
import { UserstoriesComponent } from './userstories/userstories.component';
import {MatPaginatorModule} from '@angular/material/paginator';

import { MatTableDataSource} from '@angular/material';
import { ExecutionComponent } from './execution/execution.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'configuration',
        component: ConfigurationComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'userstories',
        component: UserstoriesComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'execution',
        component:ExecutionComponent,
        canActivate:[AuthGuard]
      }
    ]
  },

];

@NgModule(
  {
    declarations:
    [
      AppComponent,
      LoginComponent,
      MenuComponent,
      ConfigurationComponent,
      HomeComponent,
      UserstoriesComponent,
      ExecutionComponent,
    ],
    imports:
    [
      BrowserModule,
      MatTableModule,
      HttpClientModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes),
      MatPaginatorModule
    ],
    exports: [ RouterModule],
    providers:
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true,
      },
      CookieService,
      AuthGuard
    ],
    bootstrap: [ AppComponent ]
  }
)
export class AppModule { }
