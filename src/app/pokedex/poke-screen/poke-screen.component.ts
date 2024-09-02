import { Component, EventEmitter, Output } from '@angular/core';
import { PokeAPIService } from '../services/pokeapi.service';
import { Pokemon, PokemonResponse } from '../interface/pokemonResponse';
import { PageEvent } from '@angular/material/paginator';
import { PokemonInterface } from '../interface/pokemonDetail';


@Component({
  selector: 'app-poke-screen',
  templateUrl: './poke-screen.component.html',
  styleUrl: './poke-screen.component.scss'
})
export class PokeScreenComponent {

  @Output() selectedPokemon = new EventEmitter<Pokemon>();
  pageEvent!: PageEvent;
  pokemonList: Pokemon[] = [];
  pokemonListType: any[] = []
  totalRecords!: number;
  start: number = 0;
  end: number = 20;
  typeName!: string;
  isSearchByType: boolean = false;
  typeColors: { [key: string]: string } = {
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
  constructor(
    private pokeAPIService: PokeAPIService,
  ) { }


  ngOnInit(): void {

    this.getPokemonList();
  }


  getPokemonList(): void {
    this.pokeAPIService.getAllPokemon().subscribe((response: PokemonResponse) => {
      this.pokemonList = response.results;
      this.totalRecords = response.count;
    });
  }

  getData(event?: PageEvent): any {
    const currentPageIndex = event?.pageIndex;
    if (this.isSearchByType) {

      if (currentPageIndex == 0) {
        this.start = 0
        this.end = 20;
        this.searchByType(this.typeName);
      } else {
        this.start = currentPageIndex! * 20 + 1;
        this.end = this.start + 19;
        this.searchByType(this.typeName);
      }
    } else {
      if (currentPageIndex == 0) {
        this.getPokemonList();
      } else {
        let offset = currentPageIndex! * 20;
        this.pokeAPIService.getPokemonPage(offset).subscribe((response: PokemonResponse) => {
          this.pokemonList = response.results;
          this.totalRecords = response.count;
        });
      }
    }

  }
  getUrlPokemon(url: string): string | null {
    const match = url.match(/\/(\d+)\/$/);
    const id = match ? match[1] : null;
    return id ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg` : null;
  }

  goToDetail(pokemon: Pokemon): void {
    this.selectedPokemon.emit(pokemon);
  }

  search(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    if (inputValue != "") {
      this.pokeAPIService.getPokemon(inputValue).subscribe((response: PokemonInterface) => {
        const pokemon: Pokemon = {
          name: response.name,
          url: `https://pokeapi.co/api/v2/pokemon/${response.id}/`
        }
        this.pokemonList = []
        this.pokemonList.push(pokemon);
        console.log(this.pokemonList)
      }, err => {
        console.log(err)
        this.getPokemonList();
      });
    } else {
      this.getPokemonList();
    }

  }
  searchByType(typeName: string): void {
    this.typeName = typeName;
    this.pokeAPIService.getPokemonByType(typeName).subscribe((response: any) => {
      this.isSearchByType = true;
      this.pokemonListType = response.pokemon;
      this.totalRecords = this.pokemonListType.length
      this.pokemonListType = this.pokemonListType.slice(this.start, this.end);
      this.pokemonList = []
      this.pokemonListType.forEach((pokemon) => {
        this.pokemonList.push(pokemon.pokemon)
      });

    })
  }

}
