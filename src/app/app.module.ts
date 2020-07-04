import { RouterModule,Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list"; 
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { ListExpenseComponent } from './list-expense/list-expense.component';
import { ExpenseCardViewComponent } from './expense-card-view/expense-card-view.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ExpenseService } from './Services/expense.service';
import { MatRippleModule } from '@angular/material/core';
import { OverlayModule, OVERLAY_PROVIDERS } from "@angular/cdk/overlay";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListExpenseComponent,
    ExpenseCardViewComponent,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatRippleModule
  ],
  exports:[RouterModule],
  providers: [ExpenseService,OVERLAY_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
