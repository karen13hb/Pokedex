import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeScreenComponent } from './poke-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('PokeScreenComponent', () => {
  let component: PokeScreenComponent;
  let fixture: ComponentFixture<PokeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule,MatPaginatorModule,MatTooltipModule],
      declarations: [PokeScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
