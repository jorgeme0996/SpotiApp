import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

// Importar Rutas
import { ROUTES } from './app.routes';

// Importar Servicios
import { SpotifyService } from './services/spotify.service';

// Importar Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './shared/components/tarjetas/tarjetas.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { ArtistaComponent } from './components/artista/artista.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    NotfoundComponent,
    NoimagePipe,
    TarjetasComponent,
    LoaderComponent,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
