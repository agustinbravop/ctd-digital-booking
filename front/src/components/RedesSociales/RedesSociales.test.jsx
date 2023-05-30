import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import RedesSociales from './RedesSociales'
import { BrowserRouter } from "react-router-dom";


describe('RedesSociales', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <RedesSociales />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        
    })
})
