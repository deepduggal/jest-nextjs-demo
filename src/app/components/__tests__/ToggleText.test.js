import { render, fireEvent } from '@testing-library/react';
import ToggleText from '../ToggleText';

describe('ToggleText', () => {
  it('should not display the text initially', () => {
    const { queryByText } = render(<ToggleText />);
    expect(queryByText('Hello, World')).toBeNull();
  });

  it('should display the text after clicking the button', () => {
    const { getByText } = render(<ToggleText />);
    const button = getByText('Toggle Text');
    fireEvent.click(button);
    expect(getByText('Hello, World')).toBeInTheDocument();
  });
});
