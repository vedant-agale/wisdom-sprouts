import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false); // Success state

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_whpmvd7',   // SERVICE_ID
      'template_kiqxyvn',  // TEMPLATE_ID
      form.current,
      'SHz88Bp82NJ2SOT5I'    // PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        setIsSent(true); // Form hide karke success message dikhayega
    }, (error) => {
        console.log(error.text);
        alert("Kuch error aaya, please try again!");
    });
  };

  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          
          {!isSent ? (
            // AGAR MESSAGE NAHI GAYA TO FORM DIKHAO
            <div className="bg-card p-5 rounded-4 shadow-lg border border-secondary">
              <h2 className="text-gold mb-4 text-center">Get In Touch</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label className="text-gold small mb-1">NAME</label>
                  <input type="text" name="from_name" className="form-control bg-dark border-secondary text-white" placeholder="Vedant Agale" required />
                </div>
                <div className="mb-3">
                  <label className="text-gold small mb-1">EMAIL ADDRESS</label>
                  <input type="email" name="from_email" className="form-control bg-dark border-secondary text-white" placeholder="name@example.com" required />
                </div>
                <div className="mb-3">
                  <label className="text-gold small mb-1">MESSAGE</label>
                  <textarea name="message" className="form-control bg-dark border-secondary text-white" rows="4" placeholder="How can I help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-gold w-100 py-3 mt-3">SEND MESSAGE</button>
              </form>
            </div>
          ) : (
            // AGAR MESSAGE CHALA GAYA TO SUCCESS MESSAGE DIKHAO
            <div className="bg-card p-5 rounded-4 shadow-lg border border-gold text-center">
              <div className="mb-4">
                <span style={{fontSize: '5rem'}}>✅</span>
              </div>
              <h2 className="text-gold mb-3">Thank You!</h2>
              <p className="text-white">Bhai, tera message mil gaya hai. Main jaldi hi tujhse connect karunga.</p>
              <button 
                className="btn btn-outline-gold mt-4" 
                onClick={() => setIsSent(false)}
                style={{borderColor: '#d4af37', color: '#d4af37'}}
              >
                Send Another Message
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Contact;