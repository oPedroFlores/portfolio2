import React from "react";
import styles from "../css/GetInTouch.module.css";
import emailjs from "emailjs-com";

const GetInTouch = ({ language }) => {
  const form = React.useRef();
  const [send, setSend] = React.useState(false);
  const [success, setSuccess] = React.useState();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ndnpdpr",
        "template_jxdxadq",
        form.current,
        "KBuKQrHHeWsicceTu"
      )
      .then(
        (result) => {
          setSend(true);
          setSuccess(true);
          console.log(result.text);
        },
        (error) => {
          setSend(false);
          setSuccess(false);
          console.log(error.text);
        }
      );
  };
  const ref = React.useRef(null);

  return (
    <section className={styles.getinTouch} id="contact">
      <div className={styles.messageContainer}>
        <h3>{language.title}</h3>
        <form onSubmit={sendEmail} ref={form}>
          <div className={styles.inputBox}>
            <input type="text" name="user_name" required />
            <span>{language.firstInput}</span>
          </div>
          <div className={styles.inputBox}>
            <input type="text" name="user_email" required />
            <span>{language.secondInput}</span>
          </div>
          <div className={styles.inputBox}>
            <textarea name="message" required />
            <span>{language.thirdInput} </span>
          </div>
          <button type="submit" className={styles.cta}>
            <span>{language.button}</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
