import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AirlineComponent } from './Components/airline/airline.component';
import { AirlineItemsComponent } from './Components/airline-items/airline-items.component';
import { ErrorComponent } from './Components/error/error.component';
import { AirlineService } from './service/airline.service';
import { AboutComponent } from './Components/about/about.component';
import { CarouselComponent } from './Components/carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AirlineComponent,
    AirlineItemsComponent,
    ErrorComponent,
    AboutComponent,
    CarouselComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AirlineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
