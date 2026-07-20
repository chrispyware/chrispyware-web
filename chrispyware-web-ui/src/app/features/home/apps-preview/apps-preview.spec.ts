import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsPreview } from './apps-preview';

describe('AppsPreview', () => {
  let component: AppsPreview;
  let fixture: ComponentFixture<AppsPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppsPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(AppsPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
