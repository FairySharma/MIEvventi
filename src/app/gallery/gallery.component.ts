import { Component, OnInit , OnChanges } from '@angular/core';
import { ServiceImagesService } from '../service-image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit,OnChanges  {

  ngOnInit() {
  }

  images:any[];    
  filterBy?: string = 'all'    
 allImages:any[] = [];    
    
  constructor(private imageService: ServiceImagesService) {    
    this.allImages = this.imageService.getImages();    
  }    
  ngOnChanges() {    
    this.allImages = this.imageService.getImages();    
  }    
}
