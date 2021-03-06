import React from 'react';
//import { render } from '@testing-library/react';
import Logout from './Logout'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from  'react-dom';
import renderer from 'react-test-renderer';

describe('<Logout/>',()=>{
  it ('is able to render',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><Logout/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><Logout/></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

  
})