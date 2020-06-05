import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

// describe('SearchComponent', () => {
//   let component: SearchComponent;
//   let fixture: ComponentFixture<SearchComponent>;

//   // beforeEach(async(() => {
//   //   TestBed.configureTestingModule({
//   //     declarations: [ SearchComponent ]
//   //   })
//   //   .compileComponents();
//   // }));

//   // beforeEach(() => {
//   //   fixture = TestBed.createComponent(SearchComponent);
//   //   component = fixture.componentInstance;
//   //   fixture.detectChanges();
//   // });

//   // it('should create', () => {
//   //   expect(component).toBeTruthy();
//   // });
// });

describe("search General", () => {

  let fixture: ComponentFixture<SearchComponent>;
  let comp: SearchComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent
      ],
      imports: [FormGroup,FormBuilder],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(SearchComponent);
      comp = fixture.debugElement.componentInstance;
    })
  }));

});
