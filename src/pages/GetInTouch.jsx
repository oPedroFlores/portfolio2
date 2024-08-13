import React from "react";
import styles from "../css/GetInTouch.module.css";
import emailjs from "emailjs-com";

const GetInTouch = ({ language }) => {
  const form = React.useRef();
  const [send, setSend] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userMessage, setUserMessage] = React.useState("");

  const sendEmail = (e) => {
    console.log("Enviando email.");
    console.log("Nome: " + userName);
    console.log("Email: " + userEmail);
    console.log("Mensagem: " + userMessage);
    if (sending) return;
    setSending(true);
    e.preventDefault();
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;

    let params = {
      user_name: userName,
      user_email: userEmail,
      message: userMessage,
    };

    emailjs.send(serviceID, templateID, params, userID).then(
      () => {
        setMessage(language.success);
        setSuccess(true);
        params = {
          user_name: "",
          user_email: "",
          message: "",
        };
        setSend(true);
      },
      () => {
        setMessage(language.error);
        setSuccess(false);
      }
    );

    form.current.reset();
    setSending(false);
  };

  return (
    <section className={styles.getinTouch} id="contact">
      <div
        className={`${styles.messageContainer} ${
          success ? styles.successSendContainer : ""
        }`}
      >
        <h3>{message ? message : language.title}</h3>
        {!send ? (
          <form onSubmit={sendEmail} ref={form}>
            <div className={styles.inputBox}>
              <input
                type="text"
                name="user_name"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
              <span>{language.firstInput}</span>
            </div>
            <div className={styles.inputBox}>
              <input
                type="text"
                name="user_email"
                required
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <span>{language.secondInput}</span>
            </div>
            <div className={styles.inputBox}>
              <textarea
                name="message"
                required
                onChange={(e) => setUserMessage(e.target.value)}
              />
              <span>{language.thirdInput} </span>
            </div>
            <button type="submit" className={styles.cta} disabled={sending}>
              <span>{sending ? language.sendingButton : language.button}</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default GetInTouch;
