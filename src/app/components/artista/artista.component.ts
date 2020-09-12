import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  artista:any = {};
  topTrakcs:any[]=[];
  loading:boolean=false;

  constructor(private _router:ActivatedRoute,private _spotify:SpotifyService) { 

    this._router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
      //console.log(params['id']);
    })

  }

  getArtista(id:string){
    this.loading=true;
    this._spotify.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.loading=false
    });
  }

  getTopTracks(id:string){
    this._spotify.getArtistTopTrakcs(id).subscribe(tracks => {
      this.topTrakcs = tracks;
      console.log(tracks);
    });
  }

}
