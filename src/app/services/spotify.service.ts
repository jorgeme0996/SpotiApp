import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable()
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAJw0si2Vq1pofnxlY0ygs9yHRrMXirdRQypIN9bSFMTKByAi57LZYa1m1sDCc4NVrkY0bguTEncICa_QU'
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
}