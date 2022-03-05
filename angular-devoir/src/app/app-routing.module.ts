import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainCenterComponent } from './main-center/main-center.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: MainCenterComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
