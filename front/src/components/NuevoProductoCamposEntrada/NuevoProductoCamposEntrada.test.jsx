import React from "react";
import { useState} from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import NuevoProductoCamposEntrada from './NuevoProductoCamposEntrada'
import { BrowserRouter } from "react-router-dom";


describe('NuevoProductoCamposEntrada', () => {
    let component;
    const setFormFeedback = (feedback) => {
        component.setState({feedback: feedback})
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter> 
                <NuevoProductoCamposEntrada setFormFeedback={setFormFeedback} />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Nombre del producto')
        component.getByPlaceholderText('La soñada')
        component.getByText('Categoría')
        component.getByText('Elegir categoría')
        component.getByText('Dirección')
        component.getByText('Ciudad')
        //let select = component.getByText('Elegir ciudad')
        //fireEvent.change(select, { target: { value: 'Madrid' } })
        component.getByText('Latitud')
        component.getByText('Longitud')
        component.getByText('Descripción')
    })
})
