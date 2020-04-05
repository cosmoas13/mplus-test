import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { delete_book } from "../_action/books";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = { isopen: false };
  }

  handleClose = () => {
    this.setState({ isopen: false });
  };

  handleDelete = e => {
    e.preventDefault();
    const id = this.props.id;
    this.props.delete_book(id);
  };

  render() {
    return (
      <>
        <Button
          variant="outline-danger"
          style={{ width: "100%" }}
          onClick={() => this.setState({ isopen: true })}
        >
          Delete
        </Button>

        <Modal show={this.state.isopen} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Book Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Delete this book?</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={this.handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const MapsDispacthToProps = dispatch => {
  return {
    delete_book: id => dispatch(delete_book(id))
  };
};

export default connect(null, MapsDispacthToProps)(Delete);
