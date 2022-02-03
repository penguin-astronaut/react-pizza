import React, { ChangeEvent, FormEvent, useState } from 'react';
import { calculatePizzaPrice } from '../calculatePizzaPrice';
import { RadioGroup } from '../components/RadioGroup';
import { CheckGroup } from '../components/CheckGroup';
import { IPizza } from './PizzaConfigurator';

interface IPizzaConfiguratorFormProps {
  setPizza: React.Dispatch<React.SetStateAction<IPizza>>;
}

export const PizzaConfiguratorForm = ({
  setPizza,
}: IPizzaConfiguratorFormProps) => {
  const [pizzaSize, setPizzaSize] = useState(30);
  const [doughType, setDoughType] = useState('пышное');
  const [sauce, setSauce] = useState('томатный');
  const [cheese, setCheese] = useState<string[]>([]);
  const [vegetables, setVegetables] = useState<string[]>([]);
  const [meat, setMeat] = useState<string[]>([]);

  const PIZZA_OPTIONS = {
    size: [30, 35],
    dough: ['пышное', 'тонкое'],
    sauce: ['томатный', 'белый', 'острый'],
    cheese: ['моцарелла', 'чеддер', 'дор блю'],
    vegetables: ['помидор', 'грибы', 'перец'],
    meat: ['бекон', 'пепперони', 'ветчина'],
  };

  const price = calculatePizzaPrice({
    meat,
    cheese,
    vegetables,
    size: pizzaSize,
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    setPizza({
      size: pizzaSize,
      dough: doughType,
      meat,
      cheese,
      vegetables,
      sauce,
      price,
    });
  };

  const checkHandler = (
    event: ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const { value, checked } = event.target;
    if (checked) {
      setState((state) => [...state, value]);
    } else {
      setState((state) => state.filter((c) => c !== value));
    }
  };

  return (
    <div className="configurator-form">
      <h2>Соберите пиццу</h2>
      <form onSubmit={onSubmit}>
        <RadioGroup
          values={PIZZA_OPTIONS.size}
          title={'Выберете размер'}
          checkedValue={pizzaSize}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setPizzaSize(parseInt(event.target.value, 10));
          }}
        />
        <RadioGroup
          values={PIZZA_OPTIONS.dough}
          title={'Выберете тесто'}
          checkedValue={doughType}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setDoughType(event.target.value);
          }}
        />
        <RadioGroup
          values={PIZZA_OPTIONS.sauce}
          title={'Выберете соус'}
          checkedValue={sauce}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setSauce(event.target.value);
          }}
        />
        <CheckGroup
          values={PIZZA_OPTIONS.cheese}
          title={'Добавьте сыр'}
          checkedValues={cheese}
          onChange={(e) => checkHandler(e, setCheese)}
        />
        <CheckGroup
          values={PIZZA_OPTIONS.vegetables}
          title={'Добавьте овощи'}
          checkedValues={vegetables}
          onChange={(e) => checkHandler(e, setVegetables)}
        />
        <CheckGroup
          values={PIZZA_OPTIONS.meat}
          title={'Добавьте мясо'}
          checkedValues={meat}
          onChange={(e) => checkHandler(e, setMeat)}
        />
        <button>Заказать {price}</button>
      </form>
    </div>
  );
};
