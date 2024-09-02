import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexComponent } from './pokedex.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokeScreenComponent } from './poke-screen/poke-screen.component';
import { PokeDescriptionComponent } from './poke-description/poke-description.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('PokedexComponent', () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,MatPaginatorModule,MatTooltipModule],
      declarations: [PokedexComponent,PokeScreenComponent,PokeDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
