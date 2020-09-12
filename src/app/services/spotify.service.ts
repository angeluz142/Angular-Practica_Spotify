import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  
  constructor(private http:HttpClient) {
    //console.log('llamdado desde el servicio spotify.');
   }

   getQuery(query:string){
     const url = `https://api.spotify.com/v1/${query}`;
     const headers = new HttpHeaders({
      'Authorization':'Bearer BQBaA0Pp-RjIYy9cCT-p0rAY5H9rhVDELHmjO0CMdsJ0QmKdLOBicjaVp-xfGvi-iHiFaecVOFqFdQSDaKo'
    });

    return this.http.get(url,{ headers });
   }

   getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
       .pipe( map(data => data['albums'].items));

       // Antes de optimizar

    // const headers = new HttpHeaders({
    //   'Authorization':'Bearer BQBkonrdXsIUXdqHniJkePWz_0Lcm9eTzHo3QJjDNIp_-9A_Y95sy6_fvzI-fifX_4LmbFh71BIbcZvYnUQ'
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers })
    // .pipe( map(data => {
    //   return data['albums'].items;
    // }) ); // la propiedad entre corchetes hace referencia a la propiedad del objeto u arreglo
   }


   getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
    // const headers = new HttpHeaders({
    //   'Authorization':'Bearer BQBkonrdXsIUXdqHniJkePWz_0Lcm9eTzHo3QJjDNIp_-9A_Y95sy6_fvzI-fifX_4LmbFh71BIbcZvYnUQ'
    // });
    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{ headers })
    // .pipe(map(data => data['artists'].items));
    // Forma de simplificar el retorno de la funcion de flecha
   }
      
   getArtista(id:string){
    return this.getQuery(`artists/${id}`);
      //.pipe(map(data => data['artists'].items));
   }

   getArtistTopTrakcs(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));
   }


}
