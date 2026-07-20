import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWorkstation } from './project-workstation';

describe('ProjectWorkstation', () => {
  let component: ProjectWorkstation;
  let fixture: ComponentFixture<ProjectWorkstation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectWorkstation],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectWorkstation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
