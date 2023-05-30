import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import LayoutGeneral from './LayoutGeneral'
import { BrowserRouter } from "react-router-dom";


describe('LayoutGeneral', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <LayoutGeneral />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Sentite como en tu hogar')
        component.getByText('©2021 Digital Booking')
    })
})
