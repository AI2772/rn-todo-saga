import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';

jest.mock('../src/components/TodoScreen', () => {
    const React = require('react');
    const { Text } = require('react-native');
    return () => <Text>Mocked Todo Screen</Text>;
});

describe('App Component', () => {
    it('renders correctly with the TodoScreen component', () => {
        const { getByText } = render(<App />);
        expect(getByText("Mocked Todo Screen")).toBeTruthy();
    });
});
