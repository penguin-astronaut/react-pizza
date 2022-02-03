import { fireEvent, render, screen } from '@testing-library/react';
import { CheckGroup } from './CheckGroup';

describe('PizzaConfiguratorCheckGroup', () => {
  it('render', () => {
    render(
      <CheckGroup
        values={['checkbox_1', 'checkbox_2', 'checkbox_3']}
        title={'Checkbox group'}
        onChange={() => {}}
        checkedValues={[]}
      />
    );

    expect(screen.getByText('Checkbox group')).toBeTruthy();
    expect(screen.queryAllByText(/checkbox_\d+/).length).toBe(3);
  });

  it('onChange', () => {
    const onChange = jest.fn();

    render(
      <CheckGroup
        values={['checkbox_1', 'checkbox_2', 'checkbox_3']}
        title={'Checkbox group'}
        onChange={onChange}
        checkedValues={[]}
      />
    );

    fireEvent.click(screen.getByText('checkbox_1'));
    fireEvent.click(screen.getByText('checkbox_2'));
    fireEvent.click(screen.getByText('checkbox_3'));

    expect(onChange).toHaveBeenCalledTimes(3);
  });
});
