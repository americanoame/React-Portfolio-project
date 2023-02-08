import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vm1nix1', 'template_k6ekitf', form.current, 'CrfH_5URscFAHTsvr')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact" class="mb-4">

      <div class="container-lg">

        <div class="text-center">
          <h2>Get in Touch</h2>
          <p>Please feel free to reach out to me!</p>
        </div>

        <div class="row justify-content-center my-5">

          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>

        </div>


      </div>

    </section>
  )
}

export default Contact;






