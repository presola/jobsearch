import { Component, OnInit } from '@angular/core';
import {JobSetGetService} from '../../service/job-set-get.service';
import {Router} from '@angular/router';
import {ApicallsService} from '../../service/apicalls.service';
import {Job} from '../../model/job';

declare let google: any;

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  job: Job;
  user_location: any;
  error_message: string;

  constructor(public jobget: JobSetGetService, public router: Router, public apiProvider: ApicallsService) {
  }

  // Initialize Components
  ngOnInit() {
    this.job = this.jobget.jobInfo;
    if (this.job === undefined) {
      this.router.navigate(['home']);
    } else {
      this.user_location = this.jobget.userLocationInfo ? this.jobget.userLocationInfo : {lat: -63.6, lng: -63.6};
      this.getDistanceLocation();
      this.setMap();
    }
  }

  /* Using the distance matrix in API Service Call, get the distance between current's user's location and job location. */
  getDistanceLocation() {
    this.apiProvider.getDistance(this.user_location.lat + ', ' + this.user_location.lng, this.job.company + ', ' + this.job.locations).subscribe((result) => {
        this.job.distance = result.rows && result.rows.length > 0 && result.rows[0].elements && result.rows[0].elements.length > 0 && result.rows[0].elements[0].distance && result.rows[0].elements[0].distance.text ? result.rows[0].elements[0].distance.text : '';
        this.job.duration = result.rows && result.rows.length > 0 && result.rows[0].elements && result.rows[0].elements.length > 0 && result.rows[0].elements[0].duration && result.rows[0].elements[0].duration.text ? result.rows[0].elements[0].duration.text : '';
      },
      (error) => {
        this.error_message = <any>error;
      });
  }

  /*Check to see if the data is empty, if it is render a map without any marker, if not,
       Based on google's api documentation, set the options of the maps*/
  setMap() {
    this.apiProvider.getAddressLatLng(this.job.company + ', ' + this.job.locations).subscribe((result) => {
        this.user_location = result.length > 0 && result[0].geometry && result[0].geometry.location ? result[0].geometry.location : this.user_location;
        let map;
        const myOptions = {
          zoom: 10,
          mapTypeId: 'roadmap',
          scrollwheel: false
        };
        map = new google.maps.Map(document.getElementById('mapSection'), myOptions);
        // get the postion for each of the dictionaries
        const position = new google.maps.LatLng(this.user_location.lat, this.user_location.lng);
        map.setCenter(position);


        // set the marker on the map based on its position
        const marker = new google.maps.Marker({
          position: position,
          map: map,
        });
      },
      (error) => {
        this.error_message = <any>error;
      });

  }

}
