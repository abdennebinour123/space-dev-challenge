import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesListComponent } from './launches-list/launches-list.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchesListComponent
  },
  {
    path: 'details/:launchId',
    component: LaunchDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchesRoutingModule { }
