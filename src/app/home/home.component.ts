import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Photos } from '../photos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
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



