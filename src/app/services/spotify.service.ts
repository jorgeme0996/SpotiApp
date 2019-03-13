import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewRealeses(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAB9Cfc1JjyLkcZkV1Weas1OvATtPm__9kgiICimTlHPcL8R7JzlrvbfiA7o2K5CZZxXgg36Dw71sBiVWS4RGUUtmUgIxDFbLEyNUd026F-4wMJWbwvutmsWk821j6134edwVto3nHYPTk'
    });
   return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtist(searchText: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAB9Cfc1JjyLkcZkV1Weas1OvATtPm__9kgiICimTlHPcL8R7JzlrvbfiA7o2K5CZZxXgg36Dw71sBiVWS4RGUUtmUgIxDFbLEyNUd026F-4wMJWbwvutmsWk821j6134edwVto3nHYPTk'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${searchText}&type=artist&limit=15`, {headers})
  }
}
