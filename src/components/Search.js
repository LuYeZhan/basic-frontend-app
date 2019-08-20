import React, { Component } from 'react'

 class Search extends Component {
    state = {
        talk: this.props.talk
    }

changeFatherState = (event) => {
    event.preventDefault()
    const value = event.target.value;
    const newTalks = this.state.talk
    const filteredTitles = newTalks.filter((talk) => {
    return talk.title.includes(value) || talk.tags[0].includes(`#${value}`)
    })
    
    this.props.changeTalk(filteredTitles)
}
  render() {

    return (
      <>
        <input type="text" name="txtBox" onChange={(event) => this.changeFatherState(event)}/>
      </>
    )
  }
}
export default Search;