/* 
    testing with fake mock service 
    https://codecraft.tv/courses/angular/unit-testing/mocks-and-spies/#_mock_by_using_a_real_instance_with_spy
*/

import { AuthService } from './auth.service';
import { LoginComponent } from "./login.component";

describe('spy service', () => {

    let component: LoginComponent;
    let service: AuthService;
    let spy: any;

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
        spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
        expect(component.needsLogin()).toBeFalsy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    });

    it('needs to login return true if not authenticated', () => {        
        spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
        expect(component.needsLogin()).toBeTruthy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    });

});