import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface UnplashResponse{
  urls:{
    regular:string
  }
}
@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor(private http: HttpClient) { }
  public getFoto(){
    return this.http.get<UnplashResponse>('https://api.unsplash.com/photos/random',
    {
      headers:{
        Authorization: 'Client-ID iTiyvdsVfYnwoRAGxVXLGO1KSxSj_tApNlXoDfjie3Y'
      }
  });
  }
}
