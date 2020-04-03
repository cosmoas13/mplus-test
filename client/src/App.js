import React from "react";
import "./App.css";

function App() {
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
            <th>Type of Book</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lucid Dream</td>
            <td>Ziggy </td>
            <td>27 Juli 2016</td>
            <td>167</td>
            <td>Novel</td>
            <td>
              <button className="btn-update">Update</button>
              <button className="btn-delete">Delete</button>
            </td>
          </tr>
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

export default App;
