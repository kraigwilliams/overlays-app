import React from 'react';
//import { render } from '@testing-library/react';
import TopicList from './TopicsList'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from  'react-dom';
import renderer from 'react-test-renderer';

describe('<TopicList/>',()=>{
  it ('is able to render',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><TopicList/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><TopicList/></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

  
})