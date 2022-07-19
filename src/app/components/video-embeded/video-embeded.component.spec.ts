import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEmbededComponent } from './video-embeded.component';

describe('VideoEmbededComponent', () => {
  let component: VideoEmbededComponent;
  let fixture: ComponentFixture<VideoEmbededComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoEmbededComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoEmbededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
