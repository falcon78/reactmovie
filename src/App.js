import React from "react";
import axios from "axios";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

let base = "https://api.themoviedb.org/3/search/movie?api_key=";
let api = "5f07da1ac6e04f73964142e3b1c32a76";
let after_api = "&query=";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Input />
        <h1 id="popular"> Popular </h1>
        <Fetcher
          url={
            "https://api.themoviedb.org/3/trending/" +
            "movie/week?api_key=5f07da1ac6e04f73964142e3b1c32a76"
          }
        />
        <Footer />
      </div>
    );
  }
}

class Fetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      previous: ""
    };
    this.runThis = this.runThis.bind(this);
  }

  async runThis() {
    if (this.props.url !== this.state.previous) {
      let response = await axios.get(this.props.url);
      this.setState({
        movies: response.data.results,
        previous: this.props.url
      });
    }
  }

  render() {
    this.runThis();
    console.log(this.state.movies);
    let base_url = "https://image.tmdb.org/t/p/w185";
    return (
      <div className="container">
        {this.state.movies.map(movie => {
          return (
            <div key={movie.id} className="content">
              <a
                target="_blank"
                href={"https://www.themoviedb.org/movie/" + movie.id}
              >
                <img src={base_url + movie.poster_path} alt={movie.title} />
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

const SearchResult = props => {
  if (props.search !== "") {
    console.log(props.search + "Search Result");
    return <Fetcher url={"".concat(base, api, after_api, props.search)} />;
  } else {
    return null;
  }
};

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: "",
      input: ""
    };
    this.handleType = this.handleType.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleType(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleClick() {
    this.setState({
      ready: this.state.input
    });
  }

  handleClear() {
    if (this.state.ready !== "") {
      this.setState({
        ready: "",
        input: ""
      });
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleEnter() {
    this.setState({
      ready: this.state.input
    });
  }

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }

  render() {
    return (
      <div className="main">
        <div className="field">
          <input
            type="input"
            className="input"
            id="text"
            placeholder="Search Movies"
            value={this.state.input}
            onChange={this.handleType}
          />
          <div className="buttondiv">
            <button className="btn" onClick={this.handleClick}>
              <i className="fa fa-search " />
              Search
            </button>
            <button className="btn" onClick={this.handleClear}>
              <i className="fa fa-trash" />
              Clear
            </button>
          </div>
        </div>
        {this.state.ready !== "" && (
          <div>
            <h1 id="search"> Search Result</h1>
            <SearchResult search={this.state.ready} />
          </div>
        )}
      </div>
    );
  }
}

const Navbar = () => {
  return (
    <nav className="nav-bar" id="nav-bar">
      <ul className="header-ul-list">
        <li className="nav-link">
          <a href="#search">
            <i className="fa fa-search" />
            Results
          </a>
        </li>
        <li className="nav-link">
          <a href="#popular">
            <i className="fa fa-film" />
            Popular
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer>
      <a
        className="aclass footer"
        target="_blank"
        href="https://github.com/falcon78/reactmovie"
      >
        <i className="fa fa-github" /> Github
      </a>
    </footer>
  );
};
