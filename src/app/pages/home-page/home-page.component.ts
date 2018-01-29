import {Component, OnInit} from '@angular/core';
import {ApicallsService} from '../../service/apicalls.service';
import {Job} from '../../model/job';
import {Router} from '@angular/router';
import {JobSetGetService} from '../../service/job-set-get.service';
import {JobSearch} from '../../model/job-search';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  jobs: Job[] = this.jobset.jobs;
  error_message = '';
  model = new JobSearch('', '');
  visible = false;

  constructor(public apiProvider: ApicallsService, public router: Router, private jobset: JobSetGetService) {
  }

  // Initialize component
  ngOnInit() {
    if (this.jobset.jobs.length < 1) {
      this.apiProvider.getCareerJetResults('', 'Halifax, NS')
        .subscribe((jobs) => {
            this.jobset.jobs = jobs;
            this.jobs = this.jobset.jobs;
          },
          (error) => {
            this.error_message = <string>error;
          });
    }
    if (this.jobset.userLocationInfo === null || this.jobset.userLocationInfo === undefined) {
      this.getUserLocation().then((location) => {
        this.jobset.userLocationInfo = location;
      });
    }
  }

  // Get user's current location using navigator
  getUserLocation(): Promise<any> {
    return new Promise(function (resolve, reject) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((result) => {
          resolve({lat: result.coords.latitude, lng: result.coords.longitude});
        });
      } else {
        resolve({lat: 44.64, lng: -63.57});
      }
    });
  }

  // go to map page
  goToMap(job: Job) {
    this.jobset.jobInfo = job;
    this.router.navigate(['map']);
  }

  // On form submit
  formSubmit() {
    this.apiProvider.getCareerJetResults(this.model.search, this.model.location)
      .subscribe((jobs) => {
          this.jobset.jobs = jobs;
          this.jobs = this.jobset.jobs;
        },
        (error) => {
          this.error_message = <string>error;
        });
  }

}
