import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { get_books } from "./_action/books";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  componentDidMount() {
    this.props.get_books();
  }
  render() {
    const { data, loading } = this.props.books;
    if (loading) return <>Now Loading...</>;
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img
              alt=""
              src="/book.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </div>
          <div style={{ paddingLeft: 15 }}>Books</div>
        </header>

        <table className="Table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Date Published</th>
              <th>Number of Pages</th>
              <th>Type of Books</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.author.name}</td>
                <td>{moment(item.date_published).format("MMMM Do YYYY")}</td>
                <td>{item.pages}</td>
                <td>{item.type.name}</td>
                <td>
                  <button className="btn-update">Update</button>
                  <button className="btn-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <footer className="footer">
          <p>
            <a
              href="https://github.com/cosmoas13"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; Cosmoas13
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

const MapsToProps = state => {
  return {
    books: state.books
  };
};

const MapsDispacthToProps = dispacth => {
  return {
    get_books: () => dispacth(get_books())
  };
};

export default connect(MapsToProps, MapsDispacthToProps)(App);
