import React, { ChangeEvent, FormEvent, useState } from 'react';
import { calculatePizzaPrice } from '../calculatePizzaPrice';
import { PizzaConfiguratorRadioGroup } from './PizzaConfiguratorRadioGroup';
import { PizzaConfiguratorCheckGroup } from './PizzaConfiguratorCheckGroup';
import { IPizza } from './PizzaConfigurator';

interface IPizzaConfiguratorFormProps {
  createPizza: React.Dispatch<React.SetStateAction<IPizza>>;
}

export const PizzaConfiguratorForm = ({
  createPizza,
}: IPizzaConfiguratorFormProps) => {
  const [pizzaSize, setPizzaSize] = useState(30);
  const [doughType, setDoughType] = useState('пышное');
  const [sauce, setSauce] = useState('томатный');
  const [cheese, setCheese] = useState<string[]>([]);
  const [vegetables, setVegetables] = useState<string[]>([]);
  const [meat, setMeat] = useState<string[]>([]);

  const data = {
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

    createPizza({
      size: pizzaSize,
      dough: doughType,
      meat,
      cheese,
      vegetables,
      sauce,
      price,
    });
  };

  return (
    <div className="configurator-form">
      <h2>Соберите пиццу</h2>
      <form onSubmit={onSubmit}>
        <PizzaConfiguratorRadioGroup
          values={data.size}
          title={'Выберете размер'}
          checkedValue={pizzaSize}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setPizzaSize(parseInt(event.target.value, 10));
          }}
        />
        <PizzaConfiguratorRadioGroup
          values={data.dough}
          title={'Выберете тесто'}
          checkedValue={doughType}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setDoughType(event.target.value);
          }}
        />
        <PizzaConfiguratorRadioGroup
          values={data.sauce}
          title={'Выберете соус'}
          checkedValue={sauce}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setSauce(event.target.value);
          }}
        />
        <PizzaConfiguratorCheckGroup
          values={data.cheese}
          title={'Добавьте сыр'}
          checkedValues={cheese}
          onChange={(e) => {
            const { value, checked } = e.target;
            if (checked) {
              setCheese((cheeseState) => [...cheeseState, value]);
            } else {
              setCheese((cheeseState) =>
                cheeseState.filter((c) => c !== value)
              );
            }
          }}
        />
        <PizzaConfiguratorCheckGroup
          values={data.vegetables}
          title={'Добавьте овощи'}
          checkedValues={vegetables}
          onChange={(e) => {
            const { value, checked } = e.target;
            if (checked) {
              setVegetables((vegetablesState) => [...vegetablesState, value]);
            } else {
              setVegetables((vegetablesState) =>
                vegetablesState.filter((v) => v !== value)
              );
            }
          }}
        />
        <PizzaConfiguratorCheckGroup
          values={data.meat}
          title={'Добавьте мясо'}
          checkedValues={meat}
          onChange={(e) => {
            const { value, checked } = e.target;
            if (checked) {
              setMeat((meatState) => [...meatState, value]);
            } else {
              setMeat((meatState) => meatState.filter((m) => m !== value));
            }
          }}
        />
        <button>Заказать {price}</button>
      </form>
    </div>
  );
};
