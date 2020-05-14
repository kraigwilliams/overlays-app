import React, { Component } from 'react';
import topicsApiService from '../Services/topics-api-service';
import notesApiService from '../Services/notes-api.service';
import {render} from '@testing-library/react';




export default React.createContext({
topics:[],
notes:[],
deleteNote: ()=>{}



})