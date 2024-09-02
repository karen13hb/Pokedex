import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PokemonInterface } from '../interface/pokemonDetail';
import { Pokemon } from '../interface/pokemonResponse';
import { PokeAPIService } from '../services/pokeapi.service';
import { PokemonType } from '../interface/pokemonType';

@Component({
  selector: 'app-poke-description',
  templateUrl: './poke-description.component.html',
  styleUrl: './poke-description.component.scss'
})
export class PokeDescriptionComponent implements OnInit,AfterViewInit {

  @Input() selectedPokemon!: Pokemon;
  pokemonInfo!:PokemonInterface;
  peso!:number ;
  altura!:number ;
  numero!:number;
  name:string="";
  types!: PokemonType[];
  url:string ="";
  constructor(
    private pokeAPIService : PokeAPIService
  ) { }

  ngOnInit(): void {  
  }

  ngAfterViewInit(){
    this.getPokemonInfo();
  }

  getPokemonInfo():void{
    this.pokeAPIService.getPokemon(this.selectedPokemon.name).subscribe((response: PokemonInterface) =>{
      this.pokemonInfo = response;
      this.name = response.name
      this.peso = response.weight
      this.altura = response.height
      this.numero = response.id
      this.types = response.types
      this.url = response.sprites.other.dream_world.front_default;
    });
  }
  getTypeColor(typeName: string) :string{

    const typeColors: { [key: string]: string } = {
      "normal": "#A8A77A",
      "fire": "#EE8130",
      "water": "#6390F0",
      "electric": "#F7D02C",
      "grass": "#7AC74C",
      "ice": "#96D9D6",
      "fighting": "#C22E28",
      "poison": "#A33EA1",
      "ground": "#E2BF65",
      "flying": "#A98FF3",
      "psychic": "#F95587",
      "bug": "#A6B91A",
      "rock": "#B6A136",
      "ghost": "#735797",
      "dragon": "#6F35FC",
      "dark": "#705746",
      "steel": "#B7B7CE",
      "fairy": "#D685AD"
    };
    return typeColors[typeName] || '#000000';

  }
 
}
 

