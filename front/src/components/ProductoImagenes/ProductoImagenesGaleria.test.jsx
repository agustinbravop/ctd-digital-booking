import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ProductoImagenesGaleria from './ProductoImagenesGaleria'
import { BrowserRouter } from "react-router-dom";


describe('ProductoImagenesGaleria', () => {
    let component;
    let imgList = [{
            img: '',
            titulo: 'titulo 2'
        },
        {
            img: '',
            titulo: 'titulo 3'
        }]
    
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ProductoImagenesGaleria imgList={imgList}/>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByAltText('titulo 3')
    })

})
