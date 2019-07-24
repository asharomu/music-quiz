import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './App';
import * as serviceWorker from './serviceWorker';

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
        songs:['Space Oddity']
    },

    {
        name: 'Dave Mustaine',
        imageUrl: 'images/authors/davemustaine.jpg',
        imageSource:'Wikimedia Commons',
        songs:['Holy Wars', 'Promises', 'Wake Up Dead', 'Polaris', 'Killing Is My Business']
    }
];

const state ={
    turnData:{
    author: authors[2],
    songs: authors[2].songs
    }
}

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
