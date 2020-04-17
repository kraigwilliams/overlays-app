import React from 'react';
//import { render } from '@testing-library/react';
import Home from './Home'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from  'react-dom';
import renderer from 'react-test-renderer';

describe('<Header/>',()=>{
  it ('is able to render',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><Home/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><Home/></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

  
})