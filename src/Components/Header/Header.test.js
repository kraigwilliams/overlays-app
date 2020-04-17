import React from 'react';
//import { render } from '@testing-library/react';
import Header from './Header'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from  'react-dom';
import renderer from 'react-test-renderer';

describe('Header />',()=>{
  it ('is able to render',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><Header/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><Header /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

  
})