import { Component } from '@angular/core';
import { PokeserviceService } from '../pokeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  PokeList: any = [];
  constructor(private pokeService: PokeserviceService, private router: Router) { }
  ngOnInit() {
    this.pokeService.getPokeList().subscribe((data) => { this.PokeList = data.results; console.log(data.results) });
  }
  obtenerIdDeUrl(url: any) {
    const regex = /\/(\d+)\//;
    const match = url.match(regex);
    if (match) {
      return match[1];
    }
    else {
      return "No se encontró un ID válido en la URL";
    }
  }
  handleDetail(url: any) {
    const pokemonId = this.obtenerIdDeUrl(url);
    console.log(url);
    this.router.navigateByUrl(`/detalle/${pokemonId}`)
  }
  handleImage(item: any) {

  }

}
