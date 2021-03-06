import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { update_book } from "../_action/books";
import { get_type } from "../_action/type";
import { get_author } from "../_action/author";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, Col } from "react-bootstrap";

class Update extends Component {
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
    const id = this.props.id;
    if (data !== null) {
      this.props.update_book(data, id);
    }
    // window.location.reload(false);
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
          variant="outline-primary"
          style={{ width: "100%" }}
          onClick={() => this.setState({ isopen: true })}
        >
          Update
        </Button>

        <Modal show={this.state.isopen} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Book</Modal.Title>
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
                    placeholder={this.props.title}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Type of Books</Form.Label>

                  <Form.Control
                    onChange={this.handleChange}
                    as="select"
                    name="id_type"
                    defaultValue={this.props.id_type}
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
                  name="id_author"
                  defaultValue={this.props.id_author}
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
                    defaultValue={this.props.date}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Number of Pages</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type="number"
                    placeholder={this.props.pages}
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
    update_book: (data, id) => dispacth(update_book(data, id)),
    get_type: () => dispacth(get_type()),
    get_author: () => dispacth(get_author())
  };
};

export default connect(MapsToProps, MapsDispacthToProps)(Update);
