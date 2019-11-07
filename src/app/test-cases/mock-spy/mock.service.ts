export class MockService {
    
    authenticated: boolean;

    constructor() {
        this.authenticated = false;
    }

    isAuthenticated(): boolean {
        return this.authenticated;
    }
}