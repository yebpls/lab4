import React from "react"
import {
  Button,
  Container,
  TextInput,
  Textarea,
  Icon,
  Select,
} from "react-materialize"
import "./contact.css"

function Contact() {
  return (
    <>
      <Container className="container">
        <h3>Contact Us</h3>
        <form>
          <TextInput id="TextInput-38" label="Your Name" />
          <TextInput id="TextInput-39" label="Your Phone" />
          <TextInput id="TextInput-41" label="Email" validate />
          <Select>
            <option disabled value="">
              Choose your favourite nation
            </option>
            <option value="1">England</option>
            <option value="2">France</option>
            <option value="3">Spain</option>
            <option value="4">America</option>
          </Select>
          <Textarea
            icon={<Icon>mode_edit</Icon>}
            id="Textarea-28"
            label="Your content"
          />
          <Button>Submit</Button>
        </form>
      </Container>
    </>
  )
}

export default Contact
