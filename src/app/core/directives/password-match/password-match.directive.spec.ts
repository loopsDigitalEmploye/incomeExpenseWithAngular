import { SignupComponent } from './../../../signup/signup.component';
import { FormsModule, NgForm } from '@angular/forms';
import { PasswordMatchDirective } from './password-match.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { UserService } from '../../services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { StorageService } from '../../services/storage/storage.service';
import { CookieService } from 'ng2-cookies';

@Component({
  template: `
         <form #testForm="ngForm">
         <input type="password" name="password" ngModel ioPasswordMatch="password">
         <input type="password" name="confirmPassword" ngModel ioPasswordMatch="confirmPassword" reverse="true">
         </form>`
})
class TestFormComponent {
}
describe('FieldMatchesValidatorDirective', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let debugElement: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, RouterTestingModule],
      declarations: [SignupComponent, PasswordMatchDirective],
      providers: [ UserService, StorageService, CookieService]
    });
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });
   it('should have a defined component', () => {
        expect(component).toBeDefined();
    });
});
