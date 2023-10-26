import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelControlDComponent } from './panel-control-d.component';

describe('PanelControlDComponent', () => {
  let component: PanelControlDComponent;
  let fixture: ComponentFixture<PanelControlDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelControlDComponent]
    });
    fixture = TestBed.createComponent(PanelControlDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
