interface calculatePizzaPriceParams {
  cheese: string[];
  vegetables: string[];
  meat: string[];
  size: number;
}

const INGREDIENT_PRICE = 29;
const BIG_SIZE_PRICE = 50;
const DEFAULT_PRICE = 250;

export const calculatePizzaPrice = ({
  meat,
  vegetables,
  cheese,
  size,
}: calculatePizzaPriceParams): number =>
  DEFAULT_PRICE +
  (meat.length + vegetables.length + cheese.length) * INGREDIENT_PRICE +
  (size === 35 ? BIG_SIZE_PRICE : 0);
