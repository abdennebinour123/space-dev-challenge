import { Launch } from './../../shared/models/launch';
import { Component, OnInit } from '@angular/core';
import { SpaceService } from 'src/app/shared/services/space.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {
  launches: Launch[] = [];
  busy: Subscription;

  constructor(private spaceService: SpaceService) { }

  ngOnInit(): void {
    this.getLaunches();
  }

  getLaunches() {
    this.spaceService.getUpcominLaunches(50).subscribe((data: any) => {
      this.launches = data.results;
    })
  }

}
