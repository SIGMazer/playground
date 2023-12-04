import { Component, OnInit, ViewChild } from '@angular/core';
import { MapMarker, MapInfoWindow } from '@angular/google-maps';

@Component({
  selector: 'app-map-test',
  templateUrl: './map-test.component.html',
  styleUrl: './map-test.component.css'
})

export class MapTestComponent implements OnInit{
  center: google.maps.LatLngLiteral = {
    lat: 29.89303795983725,
    lng: 31.303776606997406
  }

  iconPath: string = "../../assets/angerNex.png";
  
  markerOptions: google.maps.MarkerOptions = {
    icon: {url: this.iconPath}
  };

  markerText: String = "-1";
  textList: String[] = ["Zebi", "Manga"]

  markerList: google.maps.LatLngLiteral[] = [];
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  
  ngOnInit(): void {
    this.markerList.push({lat: 29.890728829852826, lng: 31.3043293284977});
    this.markerList.push({lat: 29.892360696439184, lng: 31.289517540461187});
  }

  openInfoWindow(marker: MapMarker, index: number) {
    if (this.infoWindow != undefined) {
      this.markerText = this.textList[index];
      this.infoWindow.open(marker);
    }
  }
}
