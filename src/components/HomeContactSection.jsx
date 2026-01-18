import React, { useState } from "react";

const HomeContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailError, setEmailError] = useState("");
  const [popup, setPopup] = useState({
    show: false,
    success: true,
    text: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "email") setEmailError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setPopup({
      show: true,
      success: true,
      text: "Message sent successfully! We will contact you soon.",
    });

    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setPopup({ show: false, success: true, text: "" });
    }, 3000);
  };

  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        /* ================= SECTION ================= */
        .contact-section {
          padding: 60px 0 80px;
          background: #f8f7fb;
        }

        /* ================= LEFT CONTENT ================= */
        .contact-title {
          font-size: 30px;
          font-weight: 600;
          color: #b1120b;
          margin-bottom: 8px;
        }

        .contact-text {
          font-size: 15px;
          color: #64748b;
          line-height: 1.6;
          max-width: 480px;
          margin-bottom: 12px;
        }

        /* ================= FORM CARD ================= */
        .contact-box {
          background: #ffffff;
          border-radius: 18px;
          box-shadow: 0 18px 40px rgba(0,0,0,0.08);
        }

        .form-control {
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 14px;
        }

        .form-control:focus {
          border-color: #ff7a00;
          box-shadow: 0 0 0 0.15rem rgba(255,122,0,0.15);
        }

        /* ================= BUTTON ================= */
        .send-btn {
          background: #b1120b;
          color: #ffffff;
          padding: 10px 26px;
          font-size: 13px;
          font-weight: 600;
          border-radius: 12px;
          border: none;
          transition: all 0.25s ease;
        }

        .send-btn:hover {
          background: #9e100a;
        }

        /* ================= TOAST POPUP ================= */
        .popup-message {
          position: fixed;
          top: 24px;
          right: -400px;
          min-width: 280px;
          max-width: 320px;
          padding: 14px 18px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 500;
          box-shadow: 0 18px 40px rgba(0,0,0,0.15);
          z-index: 9999;
          opacity: 0;
          transition: all 0.4s ease;
        }

        .popup-message.show {
          right: 24px;
          opacity: 1;
        }

        .popup-message.success {
          background: #ecfdf5;
          color: #065f46;
          border-left: 5px solid #10b981;
        }

        .popup-message.error {
          background: #fef2f2;
          color: #7f1d1d;
          border-left: 5px solid #ef4444;
        }

        /* ================= RESPONSIVE ================= */

        /* Tablet */
        @media (max-width: 991px) {
          .contact-title {
            font-size: 28px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .contact-section {
            padding: 40px 0 60px;
          }

          .contact-title {
            font-size: 24px;
          }

          .contact-box {
            margin-top: 12px;
          }

          .popup-message {
            top: auto;
            bottom: 20px;
            right: 50%;
            transform: translateX(50%);
            min-width: 90%;
          }

          .popup-message.show {
            right: 50%;
          }
        }
      `}</style>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container">
          <br /><br />
          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-lg-6 mb-2 mb-lg-0">
              <h3 className="contact-title">Send Us a Message</h3>
              <p className="contact-text">
                Have questions about our saffron? We're here to help you choose
                the perfect product.
              </p>
            </div>

            {/* RIGHT FORM */}
            <div className="col-lg-6">
              <div className="contact-box p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">

                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className={`form-control ${
                          emailError ? "is-invalid" : ""
                        }`}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      {emailError && (
                        <div className="invalid-feedback">{emailError}</div>
                      )}
                    </div>

                    <div className="col-12">
                      <textarea
                        rows="4"
                        name="message"
                        placeholder="Your Message"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-end">
                      <button type="submit" className="send-btn">
                        Send Message
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TOAST MESSAGE */}
      {popup.show && (
        <div
          className={`popup-message show ${
            popup.success ? "success" : "error"
          }`}
        >
          {popup.success ? " " : " "}
          {popup.text}
        </div>
      )}
    </>
  );
};

export default HomeContactSection;
