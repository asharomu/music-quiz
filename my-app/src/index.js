import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './App';
import * as serviceWorker from './serviceWorker';
import {shuffle,sample} from'underscore'

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

const state ={
    turnData:getTurnData(authors)
}

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
