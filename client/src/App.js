import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { get_books } from "./_action/books";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import MDelete from "./component/delete";
import MUpdate from "./component/update";
import MDetail from "./component/detail";
import MCreate from "./component/create";
import {
  Form,
  FormControl,
  Button,
  Navbar,
  Table,
  Row,
  Col,
  Nav,
  Spinner
} from "react-bootstrap";
class App extends Component {
  componentDidMount() {
    this.props.get_books();
  }
  render() {
    const { data, loading } = this.props.books;
    if (loading)
      return (
        <>
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </>
      );
    return (
      <div className="App">
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="#home">
            <img alt="" src="/book.svg" width="30" height="30" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <MCreate />
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search Books"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Type of Books</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{item.title}</td>
                  <td style={{ textAlign: "center" }}>
                    {item.author && item.author.name}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {item.type && item.type.name}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <Row>
                      <Col>
                        <MUpdate
                          title={item.title}
                          id_type={item.id_type}
                          id_author={item.id_author}
                          date={item.date_published}
                          pages={item.pages}
                          type={item.type && item.type.name}
                        />
                      </Col>
                      <Col>
                        <MDetail
                          title={item.title}
                          author={item.author && item.author.name}
                          date={moment(item.date_published).format(
                            "DD MMMM YYYY"
                          )}
                          pages={item.pages}
                          type={item.type && item.type.name}
                        />
                      </Col>
                      <Col>
                        <MDelete id={item.id} />
                      </Col>
                    </Row>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>

        {/* <footer className="footer">
          <p>
            <a
              href="https://github.com/cosmoas13"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; Cosmoas13
            </a>
          </p>
        </footer> */}
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
