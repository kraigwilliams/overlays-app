import React from 'react';
//import { render } from '@testing-library/react';
import AllNotes from './AllNotes'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from  'react-dom';
import renderer from 'react-test-renderer';

describe('<AllNotes/>',()=>{
  it ('is able to render',()=>{
    const div = document.createElement('div')
    const match={
        params:{
        topicName:'great'
        }
    };

    
    ReactDOM.render(<BrowserRouter><AllNotes match={match} /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the UI as expected', () => {
    const match={
            params:{
            topicName:'great'
            }
        };
    
    const tree = renderer
      .create(<BrowserRouter><AllNotes match={match} /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

  
})