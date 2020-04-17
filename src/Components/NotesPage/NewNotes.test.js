import React from 'react';
//import { render } from '@testing-library/react';
import NewNote from './NewNote'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from  'react-dom';
import renderer from 'react-test-renderer';

describe('<NewNote/>',()=>{
  it ('is able to render',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><NewNote/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><NewNote /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

  
})