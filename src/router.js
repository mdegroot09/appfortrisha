import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Post from './Components/PostShow/Post'
import NewPost from './Components/NewPost/NewPost'

export default (
  <Switch>
    <Route exact path = '/' component={Home} />
    <Route path = '/post/:id' component={Post} />
    {/* <Route path='/about' component={About}/> */}
    <Route path='/newpost' component={NewPost}/>
  </Switch>
)