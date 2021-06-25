import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  // baseurl="http://localhost:3000/Airlines";
  baseurl="https://www.kayak.com/h/mobileapis/directory/airlines";

  constructor(private Air:HttpClient) { }

  getAllAirlineLists(){
    return this.Air.get(this.baseurl,{observe:"response"})
  }
  getAirlineDetailsByCode(code:string){
    return this.Air.get(this.baseurl+"/"+code,{observe:"response"})
  }
  
}
