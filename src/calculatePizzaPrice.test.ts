import { calculatePizzaPrice } from './calculatePizzaPrice';

describe('calculatePizzaPrice', () => {
  it('no ingredients', () => {
    expect(
      calculatePizzaPrice({
        meat: [],
        vegetables: [],
        cheese: [],
        size: 30,
      })
    ).toBe(250);
  });

  it('no ingredients and big size', () => {
    expect(
      calculatePizzaPrice({
        meat: [],
        vegetables: [],
        cheese: [],
        size: 35,
      })
    ).toBe(300);
  });

  it('all ingredients', () => {
    expect(
      calculatePizzaPrice({
        meat: ['meat_1', 'meat_2'],
        vegetables: ['vegetables_1'],
        cheese: ['cheese_1'],
        size: 30,
      })
    ).toBe(366);
  });
});
