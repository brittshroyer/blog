import React, {Component} from 'react';


class SearchBar extends Component {
  render(){
    return (
    <div className="search-bar">
      <form>
        <input
        className="form-control"

        type="text"
        onKeyUp={ this.props.onSearchTermChanged }
        placeholder="Video Search" />
      </form>
    </div>
    )
  }
}

export default SearchBar;
