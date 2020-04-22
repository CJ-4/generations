import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Photos } from './photos';
import { PHOTOS } from './mock-photos';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  
  getImages(): Observable<Photos[]> {
    return of(PHOTOS)
  }
}