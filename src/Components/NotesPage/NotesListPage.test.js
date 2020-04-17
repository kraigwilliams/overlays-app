import React from 'react';
//import { render } from '@testing-library/react';
import NotesListPage from './NotesListPage'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from  'react-dom';
import renderer from 'react-test-renderer';

describe('<App/>',()=>{
  it ('is able to render',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><NotesListPage/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><NotesListPage /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

  
})