import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'BasicsTDD'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('BasicsTDD');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('BasicsTDD app is running!');
  // });
  it('myVar value should be Hello World', () => {
    const appComponent = new AppComponent();
    const value = appComponent.myVar;
    expect(value).toEqual('Hello world');
  })
  it('greet var should be contain "Alejandro"', () => {
    const appComponent = new AppComponent();
    const value = appComponent.greet;
    expect(value).toContain('Alejandro');
  });
  it('Should return TRUE', () => {
    const appComponent = new AppComponent();
    const response = appComponent.pair(2);
    expect(response).toBeTruthy();
  });
  it('Should return False', () => {
    const appComponent = new AppComponent();
    const response = appComponent.pair(3);
    expect(response).toBeFalsy();
  });

});
