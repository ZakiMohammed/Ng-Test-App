import { compute } from "./compute";

describe('compute', () => {
    it('should return 0 if negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });
    it('should increment non negative value by 1', () => {
        const result = compute(1);
        expect(result).toBe(2);
    })
});