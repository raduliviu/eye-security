import { Error } from './Error';
import { render } from 'vitest-browser-react';

describe('Error component', async () => {
  it('Should render without props', async () => {
    const { getByText } = render(<Error />);
    await expect
      .element(getByText('Something went wrong.'))
      .toBeInTheDocument();
  });

  it('Should render with props', async () => {
    const { getByText } = render(
      <Error errorMessage='Testing message' errorName='Testing name' />
    );
    await expect.element(getByText('Testing message')).toBeInTheDocument();
    await expect
      .element(getByText('Something went wrong.'))
      .not.toBeInTheDocument();
  });
});
