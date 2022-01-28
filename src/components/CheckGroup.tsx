import React, { ChangeEvent } from 'react';

interface ICheckGroupProps {
  values: (string | number)[];
  title: string;
  checkedValues: (string | number)[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CheckGroup = ({
  values,
  checkedValues,
  title,
  onChange,
}: ICheckGroupProps) => (
  <fieldset>
    <legend>{title}</legend>
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
