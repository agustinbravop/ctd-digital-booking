import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import LoadingBar from './LoadingBar'
import { BrowserRouter } from "react-router-dom";


describe('LoadingBar', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <LoadingBar />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        
    })
})
