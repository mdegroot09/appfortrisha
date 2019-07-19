import React, {Component} from 'react'

class NewPostLink extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      // {this.props.googleID === }
      <div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  const {googleID} = state
  return googleID
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewPostLink))