import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSuggComponent } from './detail-sugg.component';

describe('DetailSuggComponent', () => {
  let component: DetailSuggComponent;
  let fixture: ComponentFixture<DetailSuggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailSuggComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailSuggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
