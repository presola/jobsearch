import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import {Job} from '../model/job';

@Injectable()
export class ApicallsService {

  careerjet_url = '/jobs';
  google_api_key = 'AIzaSyBBD33M3yLgnWW4CWMKWKdG7kL_ZDLEpVI';
  places_url = '/googleplaces';
  matrix_url = '/distancematrix';

  constructor(public http: Http) {}
  // make a http call to google's distance  matrix API and return and return an observable
  getDistance(address1, address2): Observable<any> {
    const address_params = new URLSearchParams();
    address_params.append('origins', address1);
    address_params.append('destinations', address2);
    address_params.append('key', this.google_api_key);

    const options = new RequestOptions({
      search: address_params
    });

    return this.http.get(this.matrix_url, options).map((response: Response) => response.json());
  }

  // make a http call to google's places  matrix API and return and return an observable
  getAddressLatLng(address): Observable<any> {
    const address_params = new URLSearchParams();
    address_params.append('query', address);
    address_params.append('key', this.google_api_key);

    const options = new RequestOptions({
      search: address_params
    });

    return this.http.get(this.places_url, options).map((response: Response) => response.json().results);
  }

  // Get careerjet api response
  getCareerJetResults(search, location): Observable<Job[]> {
    const form: FormData = new FormData();
    form.append('keywords', search);
    form.append('location', location);

    return this.http.post(this.careerjet_url, form).map((response: Response) => <Job[]> response.json().jobs);
  }

}
