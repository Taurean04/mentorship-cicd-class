import { add } from '../math.js'
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
