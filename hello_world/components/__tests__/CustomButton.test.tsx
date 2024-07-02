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
  
});