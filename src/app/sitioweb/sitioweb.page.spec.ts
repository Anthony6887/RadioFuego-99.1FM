import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SitiowebPage } from './sitioweb.page';

describe('SitiowebPage', () => {
  let component: SitiowebPage;
  let fixture: ComponentFixture<SitiowebPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SitiowebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
