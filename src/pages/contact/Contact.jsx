import React from "react";
import SubHeader from "../../components/shared/subHeader/SubHeader";
import ContactInfo from "./contactInfo/ContactInfo";
import OnlineForm from "./onlineForm/OnlineForm";

const Contact = () => {
  return (
    <>
      <SubHeader text="Contact Us" />
      <ContactInfo />
      <OnlineForm />
    </>
  );
};

export default Contact;
