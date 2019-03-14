import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable()
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB6ksNdT8eieixEq7jf8EXmT5QjiVsDAmGDs92-AbJpDxw2KKoUbV0EOfEEw76LblHoXtkx0IA8kTRS4FPkKL5aLvEV_TlrTqUSJ5iUkblEpXu0Qplil2N30-nXEosVBeGi1OE_Zsef3dM'
    });

    return this.http.get(url, {headers});
  }

  getNewRealeses(){
   return this.getQuery('browse/new-releases?limit=20')
    .pipe(map(data => data['albums'].items));  
  }

  getArtist(searchText: string){
    return this.getQuery(`search?q=${searchText}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }

  getSpecificArtist(id: string){
    return this.getQuery(`artists/${id}`);
  }
}