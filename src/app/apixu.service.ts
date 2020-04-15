import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(public http: HttpClient) { }
  getImage(imageUrl:string):Observable<Blob> {
    return this.http.get(
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F392657661232970226%2F&psig=AOvVaw2ytliIinyG3XgvVulkIi5n&ust=1587041523497000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCe68O86ugCFQAAAAAdAAAAABAD",
      { headers: this.httpHeaders, responseType: 'blob'}
    );
  }
}
