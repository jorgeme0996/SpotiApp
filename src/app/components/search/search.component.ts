import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artists: any[];
  
  constructor(private spotify: SpotifyService) { }

  search(searchText: string){
    this.spotify.getArtist(searchText)
      .subscribe((data: any) =>{
        this.artists = data;
      })
  }
}
