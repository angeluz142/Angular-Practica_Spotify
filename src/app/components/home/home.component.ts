import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevosAlbunes:any[] = [];
  loading:boolean;
  error:boolean=false;
  mensajeError:string=null;

  constructor(private spotify:SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data:any) => {
      console.log(data);
      this.nuevosAlbunes = data;
      this.loading=false;
    },
    (respError)=>{
      this.error = true;
      console.warn(respError);
      this.mensajeError=respError.error.error.message;
    }
    );
   }



}
