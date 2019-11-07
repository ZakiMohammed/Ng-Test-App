import { AuthService } from "./auth.service";
import { LoginComponent } from "./login.component";

describe('real service', () => {

    let component: LoginComponent;
    let service: AuthService;

    beforeEach(() => {
        service = new AuthService();
        component = new LoginComponent(service);
    });

    afterEach(() => {
        service = null;
        component = null;
        localStorage.removeItem('token');
    });

    it('needs to login return false if authenticated', () => {        
        localStorage.setItem('token', '1234');
        expect(component.needsLogin()).toBeFalsy();
    });

    it('needs to login return true if not authenticated', () => {        
        expect(component.needsLogin()).toBeTruthy();
    });

});