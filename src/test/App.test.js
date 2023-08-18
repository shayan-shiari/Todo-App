import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '../components/Header/Header';
import App from '../App';

describe('App tests', () => {
    it('should contains the heading 1', () => {
    render(<Header />);
        const heading = screen.getByText(/Hello world! I am using React/i);
        expect(heading).toBeInTheDocument()
    });
});
