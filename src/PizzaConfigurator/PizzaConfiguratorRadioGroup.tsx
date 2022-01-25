import React, { ChangeEvent } from 'react';

interface PizzaConfiguratorRadioGroupProps {
  values: (string | number)[];
  title: string;
  checkedValue: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const PizzaConfiguratorRadioGroup = ({
  values,
  checkedValue,
  title,
  onChange,
}: PizzaConfiguratorRadioGroupProps) => (
  <fieldset>
    <legend>{title}</legend>
    {values.map((item) => (
      <label key={item}>
        <input
          type="radio"
          value={item}
          checked={item === checkedValue}
          onChange={onChange}
        />
        {item}
      </label>
    ))}
  </fieldset>
);
