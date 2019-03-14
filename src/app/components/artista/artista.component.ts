import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista:any;
  response;
  constructor(private router: ActivatedRoute, private spotify:SpotifyService ) {
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
    })
   }

   getArtist(id: string){
    this.spotify.getSpecificArtist(id)
      .subscribe( (data: any) => {
        this.artista = data;
        this.response=data;
        this.artista=this.response;
        console.log(this.artista);
      })
   }

}
