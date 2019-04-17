import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  MatButtonModule, MatInputModule, MatCardModule, MatDividerModule, MatTableModule, MatPaginatorModule,
  MatIconModule, MatFormFieldModule, MatProgressSpinnerModule } from '@angular/material';
import { UserdetailComponent } from './user/userdetail/userdetail.component';
import { UsereditComponent } from './user/useredit/useredit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserdetailComponent,
    UsereditComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule, MatInputModule, MatCardModule, MatTableModule,
    MatIconModule, MatFormFieldModule, MatDividerModule, MatPaginatorModule, MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
