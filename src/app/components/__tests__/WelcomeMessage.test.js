import { render } from '@testing-library/react';
import WelcomeMessage from '../WelcomeMessage';

test('displays the message', () => {
  const message = 'Welcome to our website!';
  const { getByText } = render(<WelcomeMessage message={message} />);
  const messageElement = getByText(message);
  expect(messageElement).toBeInTheDocument();
});
