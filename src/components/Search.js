import React, { Component } from 'react'

 class Search extends Component {
    state = {
        talk: [],
    }

changeFatherState = (event) => {
    const title = event.target.value;
    const newTalks = this.props.talk.map(talk => {
        if(talk.title.includes(title)){
          return talk
        }
    })
    this.props.changetalk(newTalks)
}

  render() {
    return (
      <div>
          <input type="text" name="txtBox" onChange={this.changeFatherState}/>
      </div>
    )
  }
}
export default Search;