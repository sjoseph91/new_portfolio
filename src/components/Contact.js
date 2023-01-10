import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <main className="contact">
      <h1>Contact</h1>
      <div className="bar"></div>
      <p>
        Reach out to me on{" "}
        <a
          href="https://www.linkedin.com/in/sean-c-joseph/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        , or contact me using the form below!
      </p>
      <Form />
    </main>
  );
}

export default Contact;
