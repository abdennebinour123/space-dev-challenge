import { Launch } from './../../shared/models/launch';
import { SpaceService } from './../../shared/services/space.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {
  launchId: string;
  launch: Launch = new Launch();

  constructor(private route: ActivatedRoute,
    private spaceService: SpaceService,
    private router: Router) {
    this.launchId = this.route.snapshot.paramMap.get('launchId');
  }

  ngOnInit(): void {
    this.getLaunchById();
  }

  getLaunchById() {
    this.spaceService.getUpcominLaunchById(this.launchId).subscribe((data: Launch) => {
      this.launch = data;

    }, error => {
      this.router.navigate(['/not-found'])
    });
  }

}
