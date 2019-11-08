/* 
    testing with fake mock service 
    https://codecraft.tv/courses/angular/unit-testing/mocks-and-spies/#_mocking_with_fake_classes
*/

import { MockService } from './mock.service';
import { LoginComponent } from "./login.component";

describe('mock service', () => {

    let component: LoginComponent;
    let service: MockService;

    beforeEach(() => {
        service = new MockService();
        component = new LoginComponent(service);
    });

    afterEach(() => {
        service = null;
        component = null;
        localStorage.removeItem('token');
    });

    it('needs to login return false if authenticated', () => {        
        service.authenticated = true;
        expect(component.needsLogin()).toBeFalsy();
    });

    it('needs to login return true if not authenticated', () => {        
        service.authenticated = false;
        expect(component.needsLogin()).toBeTruthy();
    });

});