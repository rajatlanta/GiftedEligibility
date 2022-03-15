import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EligibilityDetailsComponent } from './eligibility-details/eligibility-details.component';
import { EligibilityComponent } from './eligibility/eligibility.component';

const routes: Routes = [
  {path:'eligibility', component: EligibilityComponent},
  {path:'eligibilityDetails', component: EligibilityDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


