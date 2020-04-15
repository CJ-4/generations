import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  const fakeActivatedRoute = {
    snapshot: {
      queryParams: {
        returnUrl: '/'
      }
    }
  };
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useFactory: () => fakeActivatedRoute }
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ContactComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      fixture.detectChanges();
      }
    );
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test empty contactForm
  it('form invalid when empty', () => {
    component.contactForm.controls.name.setValue('');
    component.contactForm.controls.email.setValue('');
    component.contactForm.controls.body.setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  });

});
