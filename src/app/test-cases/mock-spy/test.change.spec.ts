import { TestBed, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from '@angular/core';
import { AuthService } from "./auth.service";
import { LoginComponent } from "./login.component";
import { By } from '@angular/platform-browser';

describe('change detection', () => {

    let component: LoginComponent;
    let service: AuthService;
    let fixture: ComponentFixture<LoginComponent>;
    let el: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            providers: [AuthService]
        });

        fixture = TestBed.createComponent(LoginComponent);

        component = fixture.componentInstance;

        service = TestBed.get(AuthService);

        el = fixture.debugElement.query(By.css('a'));
    });

    it('login button hidden when the user is authenticated', () => {
        expect(el.nativeElement.textContent.trim()).toBe('');
        fixture.detectChanges();

        expect(el.nativeElement.textContent.trim()).toBe('Login');
        
        spyOn(service, 'isAuthenticated').and.returnValue(true);

        expect(el.nativeElement.textContent.trim()).toBe('Login');
        fixture.detectChanges();
        
        expect(el.nativeElement.textContent.trim()).toBe('Logout');
    });

});