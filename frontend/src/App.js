import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Import custom styles for our application
import './App.css';

import Auth from './services/Auth';
import Navbar from "./components/layout/Navbar";

// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from './components/home/HomePage';
import PostsPage from "./components/posts/PostsPage";
import ChatPage from './components/chat/ChatPage';
import AssignmentsPage from './components/assignments/AssignmentsPage';
import CoursePage from './components/courses/CoursePage';
import LecturesPage from './components/lectures/LecturesPage';
import AssignmentsView from './components/assignments/AssignmentsView';


function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);
  
  const loggedInRouter = (
            <Router>
                <Navbar onLogout={() => Auth.logout()} />

                <div className="container mt-5">
                    <Switch>
                        <Route path="/courses">
                            <CoursePage/>
                        </Route>

                        <Route path="/assignments">
                            <AssignmentsView/>
                        </Route>
                        
                        

                        <Route
                            path="/assignmentsView/:assignId"
                            render={({match}) => <AssignmentsPage match={match} />}
                                />

                        <Route path="/assignmentsView">
                            <AssignmentsPage/>
                        </Route>

                        <Route path="/lectures">
                          <LecturesPage/>
                        </Route>

                        <Route path="/students">
                          <LecturesPage/>
                        </Route>

                        <Route exact path="/">
                          <HomePage/>
                          </Route>

                    </Switch>
    
                </div>
            </Router>
  );

  return (loggedIn ? loggedInRouter : <LoginPage/>);
}

export default App;
