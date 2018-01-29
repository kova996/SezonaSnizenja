import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import { Injectable } from "@angular/core";

@Injectable()
export class LocationService{

    constructor(private http : Http){}

    findLocation(coords : any, name : string){
        console.log(coords);
        return this.http.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + coords + "&radius=25000&keyword=" + name + "&key=AIzaSyBAhgZIovv8tp313vEXLO4npPyWN1rvSZI")
        .map((response : Response) => {return response.json();})
    }

    findDistances(coords : any, placeId : any){
        let dest = placeId.lat+","+placeId.lng;
        console.log(dest);
        let url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + coords + "&destinations=" + dest +"&mode=driving&key=AIzaSyBAhgZIovv8tp313vEXLO4npPyWN1rvSZI";
        return this.http.get(url)
        .map((response : Response) => {return response.json()})
    }
}