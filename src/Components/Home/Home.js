import React, {Component} from 'react'

export default class Home extends Component {
  render(){
    return(
      <div className='homeMainDiv'>
        <div className='headerDiv'>
          <img className='headerIcon' src="https://i1.wp.com/www.justpinkaboutit.com/wp-content/uploads/2019/04/kisscc0-half-of-a-yellow-sun-computer-icons-sun-icon-5b3dfe2b88c833.0121921515307894195603-1.png?ssl=1" alt=""/>
          <h1 className='headerTitle'>Simple Joys</h1>
        </div>
        <div className='tabs'>
          <button className='homeTab homeTabLeft'>Family</button>
          <button className='homeTab'>Makeup</button>
          <button className='homeTab homeTabRight'>Food</button>
        </div>
        <div className='homeTrioDiv'>
          <div className='homeLeft'>left</div>
          <div className='homeMiddle'>middle</div>
          <div className='homeRight'>right</div>
        </div>
      </div>
    )
  }
}