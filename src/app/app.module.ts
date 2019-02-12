import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth/auth.guard';
import { MenuComponent } from './MenuBar/menu.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './token/token-interceptor.service';
import { ConfigurationComponent } from './Configuration/configuration.component';
import { HomeComponent } from './home/home.component';


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
      } 
    ]
  }

];

@NgModule(
  {
    declarations: 
    [
      AppComponent,
      LoginComponent,
      MenuComponent,
      ConfigurationComponent,
      HomeComponent
    ],
    imports: 
    [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule, 
      FormsModule, 
      ReactiveFormsModule,
      RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ],
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
