import { greet } from "./greet";

describe('greet', () => {
    it('should contain the name', () => {
        const result = greet('Josh');
        expect(result).toContain('Josh');
    });
});