import { Error } from './Error';
import { render } from '@testing-library/react';

describe('Error component', () => {
  it('Should render properly', () => {
    const { getByText } = render(<Error />);
    expect(getByText('Something went wrong.')).toBeTruthy();
  });
});
