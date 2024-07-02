import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from '../CustomButton'; 

describe('CustomButton Component', () => {
  it('renders the button with the given title', () => {
    const { getByText } = render(
      <CustomButton title="Press Me" handlePress={() => {}} />
    );

    expect(getByText('Press Me')).toBeTruthy();
  });
  it('calls the handlePress function when pressed', () => {
    const handlePressMock = jest.fn();

    const { getByText } = render(
      <CustomButton title="Press Me" handlePress={handlePressMock} />
    );

    const button = getByText('Press Me');
    fireEvent.press(button);

    expect(handlePressMock).toHaveBeenCalledTimes(1);

  });
  it('does not call handlePress when isLoading is true', () => {
    const handlePressMock = jest.fn();

    const { getByText } = render(
      <CustomButton title="Press Me" handlePress={handlePressMock} isLoading={true} />
    );

    const button = getByText('Press Me');
    fireEvent.press(button);

    expect(handlePressMock).not.toHaveBeenCalled();
  });
  
  
});