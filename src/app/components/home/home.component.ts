import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  newSongs: any[];

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewRealeses()
      .subscribe((data: any)=>{
        this.newSongs = data.albums.items;
        console.log(this.newSongs);
      });
  }

}
