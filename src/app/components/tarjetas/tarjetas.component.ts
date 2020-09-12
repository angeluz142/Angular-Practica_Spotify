import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  constructor(private _router:Router) { }

  @Input() Items:any[]=[];

  verArtista(item:any){
    let idArtista:string=null;

    if(item.type === 'artist'){
      idArtista = item.id;

    }
    else if(item.type === 'album'){
      idArtista = item.artists[0].id;
    }
    //console.log(idArtista);

    this._router.navigate(['/artista', idArtista ]);
  }

}
