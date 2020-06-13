import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public userName = "OBrien";
  public profile = "../assets/img/IMG_3911.JPG"

  constructor() { }
}
