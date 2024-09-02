import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDescriptionComponent } from './poke-description.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PokeDescriptionComponent', () => {
  let component: PokeDescriptionComponent;
  let fixture: ComponentFixture<PokeDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule,MatFormFieldModule,MatInputModule,BrowserAnimationsModule],
      declarations: [PokeDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
