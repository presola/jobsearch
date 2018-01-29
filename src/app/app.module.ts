import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import {HttpModule} from '@angular/http';
import {ApicallsService} from './service/apicalls.service';
import {JobSetGetService} from './service/job-set-get.service';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NavBarComponent } from './partials/nav-bar/nav-bar.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'map', component: MapPageComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MapPageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ApicallsService, JobSetGetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
