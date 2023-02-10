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

    <div id="contact" class="container mt-5">
      <div class="card-body">
        <h1 class="contact">Contact Me!</h1>
        <form class="row g-3" ref={form} onSubmit={sendEmail}>
          <div class="col-md-6">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" class="form-control" id="firstNmae" require />
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="LasttNmae" require />
          </div>

          <div class="col-md-8">
            <label for="emailInfo" class="form-label id='emailInfo"></label>
            <input type="text" class="form-control" name="user_name" require />

          </div>
          <div class="col-md-4">
            <label for="phoneNumber" class="form-label">Phone Number</label>
            <input type="text" class="form-control" id="phoneNumber" placeholder="+1 (999) 999-9999" />
          </div>

          <div class='col-md-12'>
            <label for="comments" class="form-label">Questions?</label>
            <textarea type="email" name="user_email" class="form-control id=" comments rows="3"></textarea>
          </div>
          <div class="col-md-12">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Contact;






{/* <section id="contact" class="mb-4">

<div class="container-lg">

  <div class="text-center">
    <h2>Get in Touch</h2>
    <p>Please feel free to reach out to me!</p>
  </div>

  <div class="row justify-content-center my-5">

    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required/>
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

  </div>


</div>

</section> */}