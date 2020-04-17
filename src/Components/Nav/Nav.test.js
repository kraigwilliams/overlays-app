import React from 'react';
//import { render } from '@testing-library/react';
import Nav from './Nav'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from  'react-dom';
import renderer from 'react-test-renderer';

describe('<Nav/>',()=>{
  it ('is able to render',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><Nav/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><Nav/></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

  
})