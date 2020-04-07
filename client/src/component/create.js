import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { post_book } from "../_action/books";
import { get_type } from "../_action/type";
import { get_author } from "../_action/author";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, Col } from "react-bootstrap";

class Create extends Component {
  componentDidMount() {
    this.props.get_type();
    this.props.get_author();
  }
  constructor(props) {
    super(props);
    this.state = {
      isopen: false,
      title: "",
      id_author: "",
      id_type: "",
      date_published: "",
      pages: ""
    };
  }

  handleClose = () => {
    this.setState({ isopen: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      id_author: this.state.id_author,
      id_type: this.state.id_type,
      date_published: this.state.date_published,
      pages: this.state.pages
    };

    this.props.post_book(data);
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name, e.target.value);
  };

  render() {
    const { data: ty } = this.props.type;
    const { data: au } = this.props.author;
    return (
      <>
        <Button
          variant="outline-info"
          onClick={() => this.setState({ isopen: true })}
        >
          Add Book
        </Button>

        <Modal show={this.state.isopen} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Enter a new book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type="text"
                    name="title"
                    placeholder="Input Title"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Type of Books</Form.Label>

                  <Form.Control
                    onChange={this.handleChange}
                    as="select"
                    name="id_author"
                  >
                    {ty.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  as="select"
                  name="id_type"
                >
                  {au.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress2">
                  <Form.Label>Date Published</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type="date"
                    name="date_published"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Number of Pages</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type="number"
                    placeholder="Input Pages"
                    name="pages"
                    maxLength="10"
                  />
                </Form.Group>
              </Form.Row>
              <Button
                onClick={this.handleSubmit}
                variant="primary"
                type="submit"
                block
              >
                Add Book
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

const MapsToProps = state => {
  return {
    type: state.type,
    author: state.author,
    books: state.books
  };
};

const MapsDispacthToProps = dispacth => {
  return {
    post_book: data => dispacth(post_book(data)),
    get_type: () => dispacth(get_type()),
    get_author: () => dispacth(get_author())
  };
};

export default connect(MapsToProps, MapsDispacthToProps)(Create);
