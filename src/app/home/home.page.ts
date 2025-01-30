import { Component } from '@angular/core';
import { PokeserviceService } from '../pokeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  PokeList: any = [];
  constructor(private pokeService: PokeserviceService) { }
  ngOnInit() {
    this.pokeService.getPokeList().subscribe((data) => { this.PokeList = data.results; console.log(data.results) });
  }
  handleDetail(url: any) {
    this.router.navigateByUrl(/detalle)
  }
  handleImage() {

  }

}
