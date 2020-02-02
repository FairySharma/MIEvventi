import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceImagesService {

  constructor() { }

  allImages = [];    
    
    getImages() {    
        return this.allImages = Imagesdelatils.slice(0);    
    }    
    
    getImage(id: number) {    
        return Imagesdelatils.slice(0).find(Images => Images.id == id)    
    }    
}
const Imagesdelatils = [    
  { "id": 1, "brand": "wedding", "url": "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },    
  { "id": 2, "brand": "wedding", "url": "https://images.pexels.com/photos/1199605/pexels-photo-1199605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },    
  { "id": 3, "brand": "wedding", "url": "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },    
  { "id": 4, "brand": "wedding", "url": "https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },    
  { "id": 5, "brand": "wedding", "url": "https://images.pexels.com/photos/2060240/pexels-photo-2060240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },    
  { "id": 6, "brand": "wedding", "url": "https://images.pexels.com/photos/2102765/pexels-photo-2102765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },    
  { "id": 7, "brand": "wedding", "url": "https://images.pexels.com/photos/1385478/pexels-photo-1385478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },    
  { "id": 8, "brand": "wedding", "url": "https://images.pexels.com/photos/2064505/pexels-photo-2064505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },    
  { "id": 9, "brand": "social", "url": "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },    
  { "id": 10, "brand": "social", "url": "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },    
  { "id": 11, "brand": "social", "url": "https://images.pexels.com/photos/416831/pexels-photo-416831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },    
  { "id": 12, "brand": "social", "url": "https://images.pexels.com/photos/167638/pexels-photo-167638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },    
  { "id": 13, "brand": "social", "url": "https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },    
  { "id": 14, "brand": "social", "url": "https://images.pexels.com/photos/1395062/pexels-photo-1395062.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },    
  { "id": 15, "brand": "social", "url": "https://images.pexels.com/photos/1153253/pexels-photo-1153253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },    
  { "id": 16, "brand": "social", "url": "https://images.pexels.com/photos/974320/pexels-photo-974320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },    
  { "id": 17, "brand": "cooperate", "url": "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },    
  { "id": 18, "brand": "cooperate", "url": "https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },    
  { "id": 19, "brand": "cooperate", "url": "https://images.pexels.com/photos/3171765/pexels-photo-3171765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },    
  { "id": 20, "brand": "cooperate", "url": "https://images.pexels.com/photos/2401716/pexels-photo-2401716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },    
  { "id": 21, "brand": "cooperate", "url": "https://images.pexels.com/photos/2962403/pexels-photo-2962403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },    
  { "id": 22, "brand": "cooperate", "url": "https://images.pexels.com/photos/3419643/pexels-photo-3419643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },    
  { "id": 23, "brand": "cooperate", "url": "https://images.pexels.com/photos/3466199/pexels-photo-3466199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },    
  { "id": 24, "brand": "cooperate", "url": "https://images.pexels.com/photos/1166893/pexels-photo-1166893.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },    
  
]    
