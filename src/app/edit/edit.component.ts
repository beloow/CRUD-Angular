import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LISTDEPOKEMON } from '../db/list.pokemons';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  allPokemons = LISTDEPOKEMON;
  pokemonSelected: Pokemon | any = new Pokemon();
  
  constructor(private activeRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let idUrl: number | any = this.activeRoute.snapshot.paramMap.get('id');
    // this.pokemonSelected = this.allPokemons.find(pokemon => pokemon.id == idUrl);

    for(let i = 0; i< this.allPokemons.length; i++){
      if(this.allPokemons[i].id == idUrl){
        this.pokemonSelected = this.allPokemons[i];
        console.log(this.pokemonSelected)
        break;
      }
    }
  }

updatePokemon(){
  this.router.navigate(['']);
}
}

