import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import VideoPlayer from './VideoPlayer/VideoPlayer';
import CommentSection from './CommentSection/CommentSection';
import axios from 'axios';
import { googleAPIKey } from '../keys';



class App extends Component {
     constructor (props) {
         super(props);
         this.state = {
             DisplayVideo: ''
         };
    }
    
     componentDidMount() {
        this.getVideo();
        this.createComment();
     }

     getVideo = async () => {
         let response = await axios.get('http://127.0.0.1:8000/youtube/');
         this.setState({
             DisplayVideo: response.data
         });
     }
    
     createComment = async (newComment) => {
         let response = await axios.post("http://127.0.0.1:8000/youtube/", newComment);
         this.setState({
             newComment: response.data
         });
         this.getVideo();
     }

     render() {
          return (
            <div>
               <div className="app">
                    <Router>
                    <Switch>
                       <Route path="/search">
                          <h1>Search Page</h1>
                         </Route>
                           <Route path="/">
                           <Header />
                           <div className="app__page">
                             <VideoPlayer video_id='fhjXrhy1fuU'/>
                             <Sidebar />
                           </div>
                             <CommentSection/>
                         </Route>
                       </Switch>
                     </Router>
                </div>
            </div>
          )
      }
}

export default App;