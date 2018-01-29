import { Injectable } from '@angular/core';
import {Job} from '../model/job';
@Injectable()
export class JobSetGetService {

  job: Job;
  _jobs: Job[] = [];
  user_location: any;
  constructor() { }

  set jobInfo(jobinfo: Job) {
    this.job = jobinfo;
  }

  get jobInfo(): Job {
    return this.job;
  }

  set userLocationInfo(user_location: any) {
    this.user_location = user_location;
  }

  get userLocationInfo(): any {
    return this.user_location;
  }

  get jobs(): Job[] {
    return this._jobs;
  }

  set jobs(value: Job[]) {
    this._jobs = value;
  }

}
