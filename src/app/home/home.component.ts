import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgUrl: string = 'https://picsum.photos/200/300/?random';

  imageToShow: any;
  isImageLoading: boolean;

  constructor(private imageService: ImageService) {}

//rendering for image
    createImageFromBlob(image: Blob) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
         this.imageToShow = reader.result;
      }, false);
   
      if (image) {
         reader.readAsDataURL(image);
      }
     }
   
     getImageFromService() {
         this.isImageLoading = true;
         this.imageService.getImage(this.imgUrl).subscribe(data => {
           this.createImageFromBlob(data);
           this.isImageLoading = false;
         }, error => {
           this.isImageLoading = false;
           console.log(error);
         });
     }
     ngOnInit(){
     }
   }
   


