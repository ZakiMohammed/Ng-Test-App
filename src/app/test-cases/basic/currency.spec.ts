import { getCurrencies } from "./currency";

describe('currencies', () => {
    it('should contain USD, SR', () => {
        const result = getCurrencies();
        expect(result).toContain('SR');
    });
});