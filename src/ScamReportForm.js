import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

function ScamReportForm() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [scamType, setScamType] = useState("");
  const [screenshots, setScreenshots] = useState([]);
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    // Handle form submission logic here
  };

  const handleScreenshotsChange = (e) => {
    const files = Array.from(e.target.files);
    setScreenshots(files);
  };

  return (
    <div className="container">
      <h1>Report a Scam Website</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="url">
          <Form.Label>Website URL:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message Received:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter message received"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="scamType">
          <Form.Label>Type of Scam:</Form.Label>
          <Form.Control
            as="select"
            value={scamType}
            onChange={(e) => setScamType(e.target.value)}
            required
          >
            <option value="">Select a scam type</option>
            <option value="Phishing">Phishing</option>
            <option value="Fake Website">Fake Website</option>
            <option value="Malware">Malware</option>
            <option value="Other">Other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="screenshots">
          <Form.Label>Screenshots:</Form.Label>
          <Form.Control
            type="file"
            accept=".jpg,.png"
            multiple
            onChange={handleScreenshotsChange}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Your Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="agree">
          <Form.Check
            type="checkbox"
            label="I agree to the Terms of Service"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ScamReportForm;
