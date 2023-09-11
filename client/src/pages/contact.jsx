import { useState } from "react";

import Header from "../components/Header";
import TextInput from "../components/inputFields/TextInput";
import TextArea from "../components/inputFields/TextArea";
import PrimaryButton from "../components/buttons/PrimaryButton";
import style from "../styles/styles";

import contactUsBanner from "../assets/banners/contactUsBanner.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const disableButton = () => {
  //   if (!formData.name && !formData.email && !formData.message) {
  //     return true;
  //   }
  //   return false;
  // };

  return (
    <div>
      <Header banner={contactUsBanner} pageTitle="CONTACT US" />
      <section style={styles.contactContent}>
        <section style={styles.section}>
          <div style={styles.contactHeading}>
            <span style={style.sectionHeading}>
              We would love to hear from you.
            </span>
            <span style={{ ...style.sectionSubHeading, fontSize: "16px" }}>
              If you have any query or any type of suggestion, you can contact
              us here. We would love to hear form you.
            </span>
          </div>
          <form action="" style={styles.form}>
            <div style={styles.formTf}>
              <TextInput
                type="text"
                name="name"
                label="Name"
                value={formData.name}
                onChange={changeHandler}
                style={{ width: "400px" }}
              />

              <TextInput
                type="email"
                placeholder="Email"
                name="email"
                label="Email"
                value={formData.email}
                onChange={changeHandler}
                style={{ width: "400px" }}
              />
            </div>
            <div style={styles.formTaB}>
              <TextArea
                label="Message"
                value={formData.message}
                name="message"
                onChange={changeHandler}
              />
              <PrimaryButton
                type="submit"
                name="SEND MESSAGE"
                // disabled={false}
              />
            </div>
          </form>
        </section>
        <section style={styles.section}>
          <div style={styles.detail}>
            <span style={styles.detailsHeading}>Visit Us</span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={styles.detailsInfo}>Pokhara, Nepal</span>
              <span style={styles.detailsInfo}>Phone: +9779841000000</span>
            </div>
          </div>
          <div style={styles.detail}>
            <span style={styles.detailsHeading}>Get In Touch</span>
            <span style={styles.detailsInfo}>
              You can get in touch with us on this provided email.
            </span>
            <span style={styles.detailsInfo}>Email: swarup@gmail.com</span>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;

const styles = {
  contactContent: {
    display: "flex",
    margin: "149px 165px 110px 165px",
    justifyContent: "space-between",
  },

  section: {
    display: "flex",
    flexDirection: "column",
    gap: 48,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },

  contactHeading: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },

  formTf: {
    display: "flex",
    gap: 20,
  },

  detail: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: "350px21",
  },

  formTaB: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },

  detailsHeading: {
    fontFamily: "Arimo",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "48px",
  },

  detailsInfo: {
    fontSize: "16px",
    lineHeight: "19.2px",
    color: "#555555",
  },
};
