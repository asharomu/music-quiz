import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css';
import PropTypes from 'prop-types';

function Hero(){
  return(<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1> Artist Quiz </h1>
      <p> Select the songs written by the artist/band shown</p>
    </div>
  </div>);
}

function Song({title, onClick}){
  return(<div className="answer" onClick={() => {onClick(title);}}>
    <h4>
      {title}
    </h4>
  </div>)
}

function Turn({author,songs, highlight, onAnswerSelected}){
  function highlightToBgColor(highlight) {
    const mapping = {
      'none':'',
      'correct': 'green',
      'wrong': 'red'
    };
    return mapping[highlight];
  }

  return (<div className="row turn" style={{backgroundColor:highlightToBgColor(highlight)}}>
      <div className="col-4 offset-1">
      <img style={{width: 400, height: 600}} src={author.imageUrl} className="authorimage" alt="Author"/>
      </div>
      <div className="col-6 offset-1">
        {songs.map((title) => <Song title={title} key={title} onClick={onAnswerSelected}/>)}
      </div>
      
      </div>);
}

function Continue(){
  return (<div/>)
}

function Footer(){
  return(<div id="footer">
    <div className="col-12">
      <p className="text-muted credit"> All images are from Wikimedia Commons </p>
    </div>
  </div>);
}

function AuthorQuiz({turnData, highlight, onAnswerSelected}){
    return (
      <div className="container-fluid">
        <Hero/>
        <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
        <Continue/>
        <p><Link to="/add"> Add an Artist </Link></p>
        <Footer/>      
      </div>
    );
}

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    songs: PropTypes.arrayOf(PropTypes.string).isRequired
  }),

  songs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired
}

export default AuthorQuiz;
