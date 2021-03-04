import React from "react";
import { Alert } from "@material-ui/lab";

const Message = ({ varient, children }) => {
  return (
    <Alert
      className="mb-4"
      style={{
        fontSize: "1.2rem",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
      severity={varient}
    >
      {children}
    </Alert>
  );
};

export default Message;
