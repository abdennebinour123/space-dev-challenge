import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesListComponent } from './launches-list/launches-list.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { NgBusyModule } from 'ng-busy';


@NgModule({
  declarations: [
    LaunchesListComponent,
    LaunchDetailsComponent
  ],
  imports: [
    CommonModule,
    LaunchesRoutingModule,
    NgBusyModule
    
  ]
})
export class LaunchesModule { }
