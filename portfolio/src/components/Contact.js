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

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>

    </section>
  )
}

export default Contact;






{/* <form ref={form} onSubmit={sendEmail}>
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions?
          Please do not hesitate to contact us directly. Our team will come back to you within
          a matter of hours to help you.
        </p>

        <div class="row">


          <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">


              <div class="row">


                <div class="col-md-9">
                  <div class="md-form mb-2">
                    <input type="text" id="name" name="name" class="form-control" />
                    <label for="name" class="label-input">Your name</label>
                  </div>
                </div>

                <div class="col-md-9">
                  <div class="md-form mb-0">
                    <input type="text" id="email" name="email" class="form-control" />
                    <label for="email" class="label-input">Your email</label>
                  </div>
                </div>

              </div>

              <div class="row">
                <div class="col-md-9">
                  <div class="md-form mb-0">
                    <input type="text" id="subject" name="subject" class="form-control" />
                    <label for="subject" class="label-input">Subject</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-9">

                  <div class="md-form">
                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                    <label for="message" class="label-input">Your message</label>
                  </div>

                </div>
              </div>

            </form>

            <div class="text-center text-md-left">
              <button class="btn btn-primary" type="submit">Send</button>
            </div>
            <div class="status"></div>
          </div>
          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <p class="contac-address">New Jersey, NJ 07032, USA</p>
              </li>

              <li><i class="fas fa-phone mt-4 fa-2x"></i>
                <p class="contac-address">+1 (848) 468-8266</p>
              </li>

              <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                <p class="contac-address">Andrenations@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </form> */}