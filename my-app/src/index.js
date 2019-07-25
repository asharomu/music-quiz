import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './App';
import * as serviceWorker from './serviceWorker';
import {shuffle,sample} from 'underscore'

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
        songs:['Space Oddity', 'Heroes']
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

const state ={
    turnData:getTurnData(authors),
    highlight: ''
}

function onAnswerSelected(answer) {
    const isCorrect = state.turnData.author.songs.some((song) => song === answer);
    state.highlight = isCorrect ? 'correct' : 'wrong';
    //Update the DOM after we change the state
    render();

}

function render(){
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} />, document.getElementById('root'));
}

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
