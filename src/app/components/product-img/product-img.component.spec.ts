import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImg } from './product-img.component';

describe('ImgComponent', () => {
  let component: ProductImg;
  let fixture: ComponentFixture<ProductImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductImg ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
