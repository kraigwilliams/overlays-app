import React from 'react';
//import { render } from '@testing-library/react';
import Register from './Register'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from  'react-dom';
import renderer from 'react-test-renderer';

describe('<Register/>',()=>{
  it ('is able to render',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><Register/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><Register/></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

  
})