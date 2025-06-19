import checkHealthStatus from '../health.js';
import { describe, test, expect } from '@jest/globals';

describe('checkHealthStatus', () => {
    test('should return "healthy" if health is greater than 50', () => {
        const result = checkHealthStatus({ name: 'Test', health: 60 });
        expect(result).toBe("healthy");
    });

    test('should return "wounded" if health is between 15 and 50', () => {
        const result = checkHealthStatus({ name: 'Test', health: 30 });
        expect(result).toBe("wounded");
    });

    test('should return "critical" if health is less than 15', () => {
        const result = checkHealthStatus({ name: 'Test', health: 10 });
        expect(result).toBe("critical");
    });
});