import { getStatus } from './getStatus'

describe('get status function', () => {
    
    it('should return positive', () => {
        expect(getStatus(0.001)).toBe('positive');
        expect(getStatus(1)).toBe('positive');
    })
    
    it('should return negative', () => {
        expect(getStatus(-0.001)).toBe('negative');
        expect(getStatus(-98.001)).toBe('negative');

    })

    it('should return neutral', () => {
        expect(getStatus(0.0)).toBe('neutral');
    })
})