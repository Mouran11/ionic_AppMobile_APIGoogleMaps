import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: 'user.page.html',
  styleUrls: ['user.page.scss']
})
export class UserPage {
  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;
  center: any = {
    lat : 33.9008703,
    lng : -5.5544514,
  };

  markerId: string | undefined;


 constructor() {
        
    }
 
  ngOnInit(){

  }
  ngAfterViewInit(){
    this.showMap();
  }
  async showMap() {
    // code to show map using user.position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center.lat = position.coords.latitude;
        this.center.lng = position.coords.longitude;
      });
    }

    this.newMap = await GoogleMap.create({
      id: 'capacitor-google-maps',
      element: this.mapRef.nativeElement,
      apiKey: environment.google_maps_api_key,
      config: {
        center: this.center,
        zoom: 15,
      },
    });
  
    this.addMarker(this.center.lat, this.center.lng);
  }

  
  async addMarker(lat: any, lng: any){
    this.markerId = await this.newMap.addMarker({
      coordinate: {
        lat: lat,
        lng: lng,
      },
      draggable: true
    });
  }

 

 
  recs = ['braquage', 'Combat de rue', 'accident du circulation', 'Émeutes et vandalisme'];
  selectedRec = '';

  selectRec(rec: string) {
    this.selectedRec = rec;
  }
}
