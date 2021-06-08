import React from "react";
import unsplash from "../api/unsplash.js";
import SearchBar from "./SearchBar.js";
import ImageList from "./imageList";

class App extends React.Component {
  state = { image: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term },
      }
    );

    this.setState({ image: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h1><ImageList image={this.state.image}/></h1>
      </div>
    );
  }
}

export default App;
