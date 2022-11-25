import { Fragment, useRef, useState } from "react";
import Header from "../../components/global/Header";
import Overlay from "../../components/overlay/overlay";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import classes from "./contact.module.css";

const Contact = () => {
  const [inputs, setInputs] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  const [inputsErrors, setInputsErrors] = useState({
    Name: false,
    Email: false,
    Subject: false,
    Message: false,
  });

  const NameRef = useRef();
  const EmailRef = useRef();
  const SubjectRef = useRef();
  const MessageRef = useRef();
  let formIsValid;
  const submitHandler = (e) => {
    e.preventDefault();
    !inputs.Name.trim().length > 0 &&
      setInputsErrors(
        (prev) =>
          (prev = {
            ...prev,
            Name: true,
          })
      );
    !inputs.Email.match(/@\w+.\w+/gi) &&
      setInputsErrors(
        (prev) =>
          (prev = {
            ...prev,
            Email: true,
          })
      );
    !inputs.Subject.trim().length > 0 &&
      setInputsErrors(
        (prev) =>
          (prev = {
            ...prev,
            Subject: true,
          })
      );
    !inputs.Message.trim().length > 0 &&
      setInputsErrors(
        (prev) =>
          (prev = {
            ...prev,
            Message: true,
          })
      );
    formIsValid =
      inputs.Name.trim().length > 0 &&
      inputs.Email.match(/@\w+.\w+/gi) &&
      inputs.Subject.trim().length > 0 &&
      inputs.Message.trim().length > 0;
    if (formIsValid) {
      console.log("valid");
      setInputsErrors({
        Name: false,
        Email: false,
        Subject: false,
        Message: false,
      });
    } else {
      return;
    }
  };
  return (
    <Fragment>
      <Overlay />
      <section className={classes.contact}>
        <Header title={"GET IN"} subTitle={"TOUCH"} />
        <div>
          <div>
            <h1>GET IN TOUCH !</h1>
            <p>
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              vision.
            </p>
            <div>
              <EmailRoundedIcon />
              <span>
                <h3>MAIL ME</h3>
                <a href="mailto:mahmoudhelal9888@gmail.com">
                  mahmoudhelal9888@gmail.com
                </a>
              </span>
            </div>
            <div>
              <PhoneIcon />
              <span>
                <h3>CALL ME</h3>
                <a href="Tel: +20 1023634534">+20 01023634534</a>
              </span>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/mahmoud-helal-b0a89a246"
                target={"a_blank"}
              >
                <LinkedInIcon />
              </a>
              <a href="https://github.com/IMythx" target={"a_blank"}>
                <GitHubIcon />
              </a>
            </div>
          </div>
          <form action="" onSubmit={submitHandler}>
            <fieldset>
              <input
                type="text"
                placeholder="YOUR NAME"
                ref={NameRef}
                onChange={() =>
                  setInputs(
                    (prev) => (prev = { ...prev, Name: NameRef.current.value })
                  )
                }
                value={inputs.Name}
              />
              {inputsErrors.Name && <p>invalid name</p>}
            </fieldset>
            <fieldset>
              <input
                type="email"
                placeholder="YOUR EMAIL"
                ref={EmailRef}
                onChange={() =>
                  setInputs(
                    (prev) =>
                      (prev = { ...prev, Email: EmailRef.current.value })
                  )
                }
                value={inputs.Email}
              />
              {inputsErrors.Email && <p>invalid email</p>}
            </fieldset>
            <fieldset>
              <input
                type="text"
                placeholder="YOUR SUBJECT"
                ref={SubjectRef}
                onChange={() =>
                  setInputs(
                    (prev) =>
                      (prev = { ...prev, Subject: SubjectRef.current.value })
                  )
                }
                value={inputs.Subject}
              />
              {inputsErrors.Subject && <p>invalid subject</p>}
            </fieldset>
            <fieldset>
              <textarea
                rows={10}
                placeholder="YOUR MESSAGE"
                ref={MessageRef}
                onChange={() =>
                  setInputs(
                    (prev) =>
                      (prev = { ...prev, Message: MessageRef.current.value })
                  )
                }
                value={inputs.Message}
              />
              {inputsErrors.Message && <p>invalid message</p>}
            </fieldset>
            <button className="btn">
              SEND MESSAGE <TelegramIcon />
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
