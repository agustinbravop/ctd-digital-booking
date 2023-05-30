import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import Footer from './Footer'
import { BrowserRouter } from "react-router-dom";


describe('Footer', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('©2021 Digital Booking')
    })
})
