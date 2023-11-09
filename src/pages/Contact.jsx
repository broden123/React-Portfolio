import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// adding functionality to this later
export default function Contact() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicInput">
        <Form.Label>Name</Form.Label>
        <Form.Control type="input" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicInput">
        <Form.Label>Message</Form.Label>
        <Form.Control type="textarea" placeholder="Enter Message" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
