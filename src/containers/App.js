import React, {Component} from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots}  from '../robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

class App extends Component {
    constructor(){
      super()
      this.state ={
      robots : robots,
      searchfield :''
    }
  }

  onsearchChange = (event) => {
    this.setState({searchfield : event.target.value})
    
       }

  render(){
    const {robots,searchfield} = this.state;
      const filteredRobots=robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
          <h1>Loading</h1> :
         (
          <div className='tc' >
            <h1 className='f1'>RoboCops</h1>
             <SearchBox searchChange={this.onsearchChange} />
             <Scroll>
              <ErrorBoundry>
               <CardList robots={filteredRobots}/>
              </ErrorBoundry>
             </Scroll>
          </div>
   );
  }
}
export default App;