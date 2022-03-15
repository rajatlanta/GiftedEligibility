import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EligibilityDetailsComponent } from './eligibility-details/eligibility-details.component';
import { EligibilityComponent } from './eligibility/eligibility.component';

@NgModule({
  declarations: [
    AppComponent,
    EligibilityDetailsComponent,
    EligibilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
