import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeDisplayComponent } from './home-display/home-display.component';
import { GuardService } from './guard.service';
import { LoginButtonComponent } from './login-button/login-button.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent, HelloComponent, HomeDisplayComponent, LoginButtonComponent],
  bootstrap: [AppComponent],
  providers: [AuthGuard, GuardService]
})
export class AppModule {}
