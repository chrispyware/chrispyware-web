import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTaskforge } from './project-taskforge';

describe('ProjectTaskforge', () => {
  let component: ProjectTaskforge;
  let fixture: ComponentFixture<ProjectTaskforge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTaskforge],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectTaskforge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
