const sum = require('../scripts/sum');

describe('addition', () => {
  describe('positive numbers', () => {
    it('should add up', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
});