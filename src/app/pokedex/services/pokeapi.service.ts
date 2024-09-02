import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonInterface } from '../interface/pokemonDetail';
import { environment } from '../../../environments/environment';
import { PokemonResponse } from '../interface/pokemonResponse';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPokemon(pokemon:string): Observable<PokemonInterface> {
    return this.http.get<PokemonInterface>(`${this.apiUrl}pokemon/${pokemon}`);
  }

  getAllPokemon(): Observable<PokemonResponse>{
    return this.http.get<PokemonResponse>(`${this.apiUrl}pokemon`);
  }

  getPokemonPage(offset:number): Observable<PokemonResponse>{
    return this.http.get<PokemonResponse>(`${this.apiUrl}pokemon?offset=${offset}&limit=20`);
  }

  getPokemonByType(typeName:string):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}type/${typeName}`);
  }

}