import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-admin',
  templateUrl: 'admin.page.html',
  styleUrls: ['admin.page.scss']
})
export class AdminPage {
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
  user = {
    name: 'mohammed Mouran',
    email: 'user@mail.com',
    rec: 'braquage',
    position: '33.9008703, -5.5544514'
  };
  ngOnInit(){

  }
  ngAfterViewInit(){
    this.showMap();
  }
  async showMap() {
    // code to show map using user.position
    this.newMap = await GoogleMap.create({
      id: 'capacitor-google-maps',
      element: this.mapRef.nativeElement,
      apiKey: environment.google_maps_api_key,
      config: {
        center: this.center,
        zoom: 13,
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
    
  }

