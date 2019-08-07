import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Redux from 'redux';
import *as ReactRedux from 'react-redux';
import AuthorQuiz from './App';
import * as serviceWorker from './serviceWorker';
import {shuffle,sample} from 'underscore';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import AddAuthorForm from './AddAuthorForm'

const authors = [
    {
    name: 'James Hetfield',
    imageUrl: 'images/authors/jameshetfield.jpg',
    imageSource:'Wikimedia Commons',
    songs:['Master of Puppets', 'Blackened', 'Nothing Else Matters']
    },

    {
        name: 'David Bowie',
        imageUrl: 'images/authors/davidbowie.jpg',
        imageSource:'Wikimedia Commons',
        songs:['Space Oddity', 'Heroes', 'Changes', 'Under Pressure']
    },

    {
        name: 'Dave Mustaine',
        imageUrl: 'images/authors/davemustaine.jpg',
        imageSource:'Wikimedia Commons',
        songs:['Holy Wars', 'Promises', 'Wake Up Dead', 'Polaris', 'Killing Is My Business']
    },

    {
        name: 'Paul Stanley',
        imageUrl: 'images/authors/paulstanley.jpg',
        imageSource:'Wikimedia Commons',
        songs:['Forever', 'Strutter', 'Psycho Circus', 'Love Gun']
    },

    {
        name: 'Bruce Dickinson',
        imageUrl: 'images/authors/brucedickinson.jpg',
        imageSource:'Wikimedia Commons',
        songs:['Revelations', 'Hallowed Be Thy Name', 'Alexander The Great', 'Fear of the Dark']
    }
];

function getTurnData(authors) {
    const allSongs = authors.reduce(function(p,c,i) {
        return p.concat(c.songs);
    }, []);
    
    const fourRandomSongs = shuffle(allSongs).slice(0,4);
    const answer = sample(fourRandomSongs);

    return {
        songs: fourRandomSongs,
        author: authors.find((author) =>
            author.songs.some((title) => 
            title === answer))    
    }
}

function reducer(state = { authors, turnData: getTurnData(authors), highlight:'' }, action)
{
    switch(action.type) {
        case 'ANSWER_SELECTED' :
            const isCorrect = state.turnData.author.songs.some((song) => song === action.answer);
            return Object.assign({}, state, {
                highlight: isCorrect ? 'correct' : 'wrong'
            });
        case 'CONTINUE' :
            return Object.assign({}, state, {
                highlight:'',
                turnData: getTurnData(state.authors)
            });

        case 'ADD AUTHOR' :
            return Object.assign({}, state, {
                authors: state.authors.concat([action.author])
            });

        default: return state;
    }
}

let store = Redux.createStore(reducer);

function App(){
    return <AuthorQuiz/>;
}

    ReactDOM.render(
    <BrowserRouter>
        <ReactRedux.Provider store={store}>
            <React.Fragment>
                <Route exact path="/" component={App} />
                <Route path="/add" component={AddAuthorForm}/>
            </React.Fragment>
        </ReactRedux.Provider>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
