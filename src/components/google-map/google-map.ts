import { Component,ViewChild} from '@angular/core';

declare var google;
  

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

  @ViewChild("map")mapElement;
  map:any;
  

  constructor() {
  
  }

  ngOnInit(){
    this.initMap();
  }
  initMap(){
    let coords =new google.maps.LatLng(7.8956,80.3847) 
    let mapOptions:google.maps.MapOptions={
      center:coords,
      zoom:10,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    }
    this.map=new google.maps.Map(this.mapElement.nativeElement,mapOptions)
   }

}
