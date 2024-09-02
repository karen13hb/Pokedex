import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
import { PokeScreenComponent } from './poke-screen/poke-screen.component';
import { PokeDescriptionComponent } from './poke-description/poke-description.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [
    PokedexComponent,
    PokeScreenComponent,
    PokeDescriptionComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    PokedexRoutingModule,
    MatIconModule,
    MatFormFieldModule,       
    MatInputModule, 
    MatButtonModule,
    MatTooltipModule
  ],
  exports:[

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PokedexModule { }
