import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Card } from "react-bootstrap";

class Detail extends Component {
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
          variant="outline-success"
          style={{ width: "100%" }}
          onClick={() => this.setState({ isopen: true })}
        >
          Detail
        </Button>

        <Modal show={this.state.isopen} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Book Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card className="text-center">
              <Card.Header>{this.props.title}</Card.Header>
              <Card.Img variant="top" src="/dilan.jpg" />
              <Card.Body>
                <Card.Title>{this.props.author}</Card.Title>
                <Card.Text>
                  {this.props.type} - {this.props.pages} Pages
                </Card.Text>
                <Button variant="primary">Buy this Book</Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                {this.props.date}
              </Card.Footer>
            </Card>
          </Modal.Body>
          {/* <Modal.Footer></Modal.Footer> */}
        </Modal>
      </>
    );
  }
}

export default Detail;
