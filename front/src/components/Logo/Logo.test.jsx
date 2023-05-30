import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import Logo from './Logo'
import { BrowserRouter } from "react-router-dom";


describe('Logo', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <Logo />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Sentite como en tu hogar')
    })

    test('submit form', () => {
        let button = component.getByText('Sentite como en tu hogar')
        fireEvent.click(button)
    })
})
