import { fireEvent, render, screen } from '@testing-library/react';
import { RadioGroup } from './RadioGroup';

describe('PizzaConfiguratorRadioGroup', () => {
  it('render', () => {
    render(
      <RadioGroup
        values={['radio_1', 'radio_2']}
        title={'Radio group'}
        checkedValue={'radio_1'}
        onChange={() => {}}
      />
    );

    expect(screen.getByText('Radio group')).toBeTruthy();
    expect(screen.queryAllByText(/radio_\d+/).length).toBe(2);
  });

  it('onChange', () => {
    const onChange = jest.fn();

    render(
      <RadioGroup
        values={['radio_1', 'radio_2', 'radio_3', 'radio_4']}
        title={'Radio group'}
        checkedValue={'radio_1'}
        onChange={onChange}
      />
    );

    fireEvent.click(screen.getByText('radio_2'));
    fireEvent.click(screen.getByText('radio_4'));
    fireEvent.click(screen.getByText('radio_3'));

    expect(onChange).toHaveBeenCalledTimes(3);
  });
});
