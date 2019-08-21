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
      return talk.title.includes(value) || talk.tags[0].includes(value)
    })
    this.props.changeTalk(filteredTitles)
}
  render() {

    return (
      <>
        <input className="search-width" type="text" name="txtBox" placeholder="Search" onChange={(event) => this.changeFatherState(event)}/>
      </>
    )
  }
}
export default Search;