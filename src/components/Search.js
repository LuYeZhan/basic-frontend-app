import React, { Component } from 'react'

 class Search extends Component {
  state = {
      talk: this.props.talk
  }

  changeFatherState = (event) => {
    event.preventDefault()
    const value = event.target.value.toLowerCase();
    const newTalks = this.state.talk;
    newTalks.map((talk)=>{
      talk.newTitle = talk.title.toLowerCase();
      talk.newTags = [talk.tags[0].toLowerCase()];
      return talk;
    })
    const filteredTalks = newTalks.filter((talk) => {
      return talk.newTitle.includes(value) || talk.newTags[0].includes(value)
    })
    this.props.changeTalk(filteredTalks);
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