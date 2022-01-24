import React, { ChangeEvent } from 'react';

interface PizzaConfiguratorCheckGroupProps {
  values: (string | number)[];
  title: string;
  checkedValues: (string | number)[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const PizzaConfiguratorCheckGroup = ({
  values,
  checkedValues,
  title,
  onChange,
}: PizzaConfiguratorCheckGroupProps) => (
  <fieldset>
    <legend>{title}:</legend>
    {values.map((item) => (
      <label key={item}>
        <input
          type="checkbox"
          value={item}
          checked={checkedValues.includes(item)}
          onChange={onChange}
        />
        {item}
      </label>
    ))}
  </fieldset>
);
