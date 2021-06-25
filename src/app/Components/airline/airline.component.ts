import { Component, OnInit } from '@angular/core';
import { AirlineService } from 'src/app/service/airline.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css'],
})
export class AirlineComponent implements OnInit {
  Airlines:any;
  rev:any;
  constructor(private myAirline: AirlineService ) {
    this.rev = this.myAirline.getAllAirlineLists().subscribe(
      (res) => {
        this.Airlines = res.body;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    
  }

}
