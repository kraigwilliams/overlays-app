import React from 'react';
//import { render } from '@testing-library/react';
import Submit from './Submit'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from  'react-dom';
import renderer from 'react-test-renderer';

describe('<Submit/>',()=>{
  it ('is able to render',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><Submit/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><Submit /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

  
})