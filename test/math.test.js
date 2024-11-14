import { add, subtract } from '../math.js'
import { expect } from 'chai'

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });

  it('should handle negative numbers', () => {
    const result = add(-2, -3);
    expect(result).to.equal(-5);
  });

  it('should return 0 when adding 0 and 0', () => {
    const result = add(0, 0);
    expect(result).to.equal(0);
  });
  
  it('should throw an error when inputs are not numbers', () => {
    expect(() => add('a', 'b')).to.throw();
  });
});

describe('Math Functions', () => {
  describe('add()', () => {
    it('should return 5 for add(2, 3)', () => {
      expect(add(2, 3)).to.equal(5);
    });

    it('should return -1 for add(-3, 2)', () => {
      expect(add(-3, 2)).to.equal(-1);
    });
  });

  describe('subtract()', () => {
    it('should return 1 for subtract(3, 2)', () => {
      expect(subtract(3, 2)).to.equal(1);
    });

    it('should fail by returning 5 for subtract(3, 2)', () => {
      expect(subtract(3, 2)).to.equal(1); // This test will fail
    });
  });
});
