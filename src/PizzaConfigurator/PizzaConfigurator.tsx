import { useState } from 'react';
import { PizzaConfiguratorForm } from './PizzaConfiguratorForm';
import { PizzaOrder } from './PizzaOrder';

export interface IPizza {
  size: number;
  dough: string;
  sauce: string;
  cheese: string[];
  vegetables: string[];
  meat: string[];
  price: number;
}

export const PizzaConfigurator = () => {
  const [pizza, setPizza] = useState<IPizza>({} as IPizza);

  return (
    <div className={'configurator'}>
      {pizza.size ? (
        <PizzaOrder pizza={pizza} />
      ) : (
        <PizzaConfiguratorForm createPizza={setPizza} />
      )}
    </div>
  );
};
