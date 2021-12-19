import React from "react";
import Footer from "./../Footer";
import "./Contact";
import {
  Drop,
  DropTitle,
  DropTitleSpan,
  Form,
  Input,
  FormInput,
  FormText,
  FormEmail,
  InputSub,
  Textarea,
  InputSubmit,
} from "./Contact";

const Contact = () => {
  return (
    <React.Fragment>
      <Drop>
        <div className="container">
          <DropTitle>
            <DropTitleSpan>Drop </DropTitleSpan>Me A line
          </DropTitle>
          <Form action="">
            <FormInput>
              <FormText type="text" placeholder="Your Name" />
              <FormEmail type="email" placeholder="Your Email" />
            </FormInput>
            <InputSub type="text" className="sub" placeholder="Your Subject" />
            <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
            <InputSubmit type="submit" value="Send Message" />
          </Form>
        </div>
      </Drop>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
