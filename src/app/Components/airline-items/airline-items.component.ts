import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-airline-items',
  templateUrl: './airline-items.component.html',
  styleUrls: ['./airline-items.component.css']
})
export class AirlineItemsComponent implements OnInit {
  
  readmore:boolean=true;
  visible:boolean = false;

  constructor() { }

  HandleClick(){
    this.readmore = !this.readmore;
    this.visible = !this.visible;
  }

  ngOnInit(): void {
  }

  @Input() oneAirline:any;

}
