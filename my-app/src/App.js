import React from 'react';
import './App.css';
import './bootstrap.min.css';

function Hero(){
  return(<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1> Author Quiz </h1>
      <p> Select the song written by the author shown</p>
    </div>
  </div>);
}

function Artist({title}){
  return(<div className="answer">
    <h4>
      {title}
    </h4>
  </div>)
}

function Turn({author,songs}){
  return (<div className="row turn" style={{backgroundColor:"White"}}>
      <div className="col-4 offset-1">
      <img style={{width: 500, height: 700}} src={author.imageUrl} className="authorimage" alt="Author"/>
      </div>
      <div className="col-6 offset-1">
        {songs.map((title) => <Artist title={title} key={title}/>)}
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

function AuthorQuiz({turnData}){
    return (
      <div className="container-fluid">
        <Hero/>
        <Turn {...turnData}/>
        <Continue/>
        <Footer/>
      </div>
    );
}

export default AuthorQuiz;
