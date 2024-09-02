import { TestBed } from '@angular/core/testing';
import { PokeAPIService } from './pokeapi.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ServiceEjemploService', () => {
  let service: PokeAPIService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[HttpClientTestingModule],
      providers:[PokeAPIService]});
    service = TestBed.inject(PokeAPIService);
    httpMock = TestBed.inject(HttpTestingController);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  }); 
  afterEach(() => {
    httpMock.verify(); 
  });
  it('should return a list of 20 Pokémon', () => {
    const mockPokemonResponse = {
      count: 1302,
      next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
      previous: null,
      results: [
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
        { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
        { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
        { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
        { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
        { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
        { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
        { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
        { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
        { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
        { name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/" },
        { name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/" },
        { name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/" },
        { name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/" },
        { name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/" },
        { name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/" },
        { name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/" },
        { name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon/18/" },
        { name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/19/" },
        { name: "raticate", url: "https://pokeapi.co/api/v2/pokemon/20/" }
      ]
    };
  
    service.getAllPokemon().subscribe((response) => {
      expect(response.results).toHaveSize(20);
      expect(response.count).toBe(1302);
      expect(response.next).toBe("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20");
      expect(response.previous).toBeNull();
    });
  
    const req = httpMock.expectOne(`${service['apiUrl']}pokemon`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPokemonResponse);
  });
  
  it('should return the correct Pokémon', (done) => {

    service.getPokemon('venusaur').subscribe((response) => {
      expect(response.name).toEqual('venusaur');
      done();
    });

    const req = httpMock.expectOne(`${service['apiUrl']}pokemon/venusaur`);
    expect(req.request.method).toBe('GET');
  });
});

  
