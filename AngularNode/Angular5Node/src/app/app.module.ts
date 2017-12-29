import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        HeaderComponent,
        NotFoundComponent,
        LoginComponent,
        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        CollapseModule,
        AppBootstrapModule
    ],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
