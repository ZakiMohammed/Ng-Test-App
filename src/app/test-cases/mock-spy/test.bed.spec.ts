import { TestBed, ComponentFixture } from "@angular/core/testing";
import { AuthService } from './auth.service';
import { LoginComponent } from "./login.component";

describe('testBed', () => {

    let component: LoginComponent;
    let service: AuthService;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            providers: [AuthService]
        });

        fixture = TestBed.createComponent(LoginComponent);

        component = fixture.componentInstance;

        service = TestBed.get(AuthService);
    });

    it('needs to login return false if authenticated', () => {        
        spyOn(service, 'isAuthenticated').and.returnValue(true);
        expect(component.needsLogin()).toBeFalsy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    });

    it('needs to login return true if not authenticated', () => {        
        spyOn(service, 'isAuthenticated').and.returnValue(false);
        expect(component.needsLogin()).toBeTruthy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    });

});