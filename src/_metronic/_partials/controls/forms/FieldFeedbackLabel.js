import React from "react";

const inputLabel = ({ label, touched, error, customFeedbackLabel }) => {

  if (touched && error) {
    return <div className="invalid-feedback">{error}</div>;
  }

  if (touched && !error && label) {
    return <div className="valid-feedback">{label}  doğru girildi.</div>;
  }

  return (
    <div className="feedback">
      {customFeedbackLabel && <>{customFeedbackLabel}</>}
      {!customFeedbackLabel && (
        <>
         Lütfen <b>{label}</b> girin
        </>
      )}
    </div>
  );
};

const selectLabel = ({ label, touched, error, customFeedbackLabel }) => {
  

  if (touched && error) {
    return <div className="invalid-feedback">{error}</div>;
  }
  if (touched && !error && label) {
    return <div className="valid-feedback">{label}  doğru girildi.</div>;
  }
  return (
    <div className="feedback">
      {customFeedbackLabel && <>{customFeedbackLabel}</>}
      {!customFeedbackLabel && label && (
        <>
         Lütfen <b>{label}</b> seçiniz
        </>
      )}
    </div>
  );
};

export function FieldFeedbackLabel({
  label,
  touched,
  error,
  type,
  customFeedbackLabel
}) {
  switch (type) {
    case "select":
      return selectLabel({ label, touched, error, customFeedbackLabel });
    case "text":
      return inputLabel({ label, touched, error, customFeedbackLabel });
    case "email":
      return inputLabel({ label, touched, error, customFeedbackLabel });
    case "password":
      return inputLabel({ label, touched, error, customFeedbackLabel });
    default:
      return selectLabel({ label, touched, error, customFeedbackLabel });
  }
}
