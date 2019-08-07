import React from 'react'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import "./AddAuthorForm.css"

class AuthorForm extends React.Component {
   
    constructor(props) {
       super(props);
       this.state = {
           name: '',
           imageUrl:'',
           songs:[],
           songTemp:''
       };

       this.onFieldChange = this.onFieldChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleAddSong = this.handleAddSong.bind(this);
    }

    //method used to change the state of the component
    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }

    handleAddSong(event){
        this.setState({
            songs: this.state.songs.concat([this.state.songTemp]),
            songTemp:''
        })
    }
    
    render() {
        //each song will be mapped to a paragraph containing the name of the song
        return <form onSubmit={this.handleSubmit}>
        <div className="AddAuthorForm__input">
            <label htmlFor="name">Name </label>
            <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}></input>
        </div>

        <div className="AddAuthorForm__input">
            <label htmlFor="imageUrl ">Image Url</label>
            <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange}></input>
        </div>
        <div className="AddAuthorForm__input">
            {this.state.songs.map((song) => <p key={song}>{song}</p>)}
            <label htmlFor="songTemp">Songs</label>
            <input type="text" name="songTemp" value={this.state.songTemp} onChange={this.onFieldChange}></input>
            <input type="button" value="+" onClick={this.handleAddSong}></input>
        </div>
        <input type="submit" value="Add"></input>
    </form>
    }
}

function AddAuthorForm({match, onAddAuthor}){
    return <div className="AddAuthorForm">
        <h1>Add Author</h1>
        <AuthorForm onAddAuthor={onAddAuthor}/>
    </div>;
}

function mapDispatchToProps(dispatch, props) {
    return {
        onAddAuthor : (author) => {
            dispatch({ type: 'ADD_AUTHOR', author});
            props.history.push('/');
     }
    }
}

export default withRouter(connect(()=> {}, mapDispatchToProps)(AddAuthorForm));