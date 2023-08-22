import React from "react";
import SubHeader from "../../components/shared/subHeader/SubHeader";
import ContactInfo from "./contactInfo/ContactInfo";
import OnlineForm from "./onlineForm/OnlineForm";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Tasty Delights | Contact</title>
      </Helmet>
      <SubHeader text="Contact Us" />
      <ContactInfo />
      <OnlineForm />
    </>
  );
};

export default Contact;
