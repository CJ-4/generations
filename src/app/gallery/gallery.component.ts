import { Component, OnInit} from '@angular/core';
import { ImageService } from '../image.service';
import { Photos } from '../photos';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {

pics: Photos[];

  constructor(private imageService: ImageService) {
    
  }
  ngOnInit(){
    this.getImages();
  }
  getImages(): void{
    this.imageService.getImages()
      .subscribe(pics => this.pics = pics);
  }
}
 