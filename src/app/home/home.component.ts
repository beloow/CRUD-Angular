import { Component } from '@angular/core';
import { LISTDEPOKEMON } from '../db/list.pokemons';
import { Pokemon } from '../models/pokemon';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allPokemons = LISTDEPOKEMON;
  pokemonSelected: Pokemon = new Pokemon();


  viewPokemon(arg: Pokemon) {
    this.pokemonSelected = arg;
    // console.log(this.pokemonSelected);
  }

  searchFilter(value: string) {
    this.allPokemons = LISTDEPOKEMON;
    this.allPokemons = this.allPokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(value.toLowerCase());
      // Recupere les pokemons dont le nom contient la valeur de l'input en minuscule
    })
    if (this.allPokemons.length === 0) {
      this.info('Aucun résultat', 'Aucun pokémon ne correspond à votre recherche');
    }
  }

  info(title: string, mess: string) {

    Swal.fire({
      title: title,
      text: mess,
      icon: 'info',
      width: 600,
      timer: 3000,
      padding: '3em',
      backdrop: false,
      showConfirmButton: false,
      customClass: { popup: 'popup' }
    })

  }

  removePokemon() {
    const index = this.allPokemons.indexOf(this.pokemonSelected, 0);
    if (index > -1) {
      this.allPokemons.splice(index, 1);
    }
  }


}
