import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'maplibre-gl'
@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent  implements AfterViewInit {

  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    if(!this.divMap?.nativeElement) throw 'Map Div no encontrado';
    if(!this.lngLat) throw 'LngLat no puede ser nulo';

    const map = new Map({
      container: this.divMap.nativeElement, // container id
      style: 'https://demotiles.maplibre.org/style.json', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 2, // starting zoom
      interactive: false,
    });

    new Marker()
    .setLngLat(this.lngLat)
    .addTo(map)

  }

}
