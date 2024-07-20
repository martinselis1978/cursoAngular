import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker} from 'maplibre-gl';

interface MarkerAndColor{
  color:string,
  marker:Marker,
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-59.57297796119434, -36.267640523705474);

  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container id
      style: 'https://demotiles.maplibre.org/style.json', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 3, // starting zoom
    });

    this.readFromLocalStorage();

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Martín Selis'

    // const marker = new Marker({
    //   color: 'red',
    //   element: markerHtml,
    // })
    //   .setLngLat( this.currentLngLat )
    //   .addTo( this.map );

  }

  createMarker() {
    if (!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, y => ( Math.random() * 16|0 ).toString(16));
    const lngLat = this.map?.getCenter();

    this.addMarker(lngLat,color);
  }

  addMarker( lngLat: LngLat, color: string ) {
    if ( !this.map ) return;

    const marker = new Marker({
      color: color,
      draggable: true
    })
    .setLngLat( lngLat )
    .addTo( this.map );

    this.markers.push({color, marker});
    this.saveToLocalStorage();

    marker.on('dragend', () => {
      this.saveToLocalStorage();
    });
  }

  deleteMarker(index:number) {
    this.markers[index].marker.remove();
    this.markers.splice(index,1);
  }

  flyTo(marker:Marker) {
    this.map?.flyTo({
      zoom: 5,
      center: marker.getLngLat()
    })
  }

  saveToLocalStorage() {
    const plainMarkers: PlainMarker[] = this.markers.map( ({ color, marker }) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    });

    localStorage.setItem('plainMarkers',JSON.stringify(plainMarkers));

  }

  readFromLocalStorage() {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);

    plainMarkers.forEach(({color, lngLat}) => {
      const [lng, lat] = lngLat;
      const coords = new LngLat(lng, lat);
      this.addMarker(coords, color);
    });
  }

}
