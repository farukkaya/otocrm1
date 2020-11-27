import React from "react";

export function FormAlert({
  isEnabled = false,
  type = "danger",
  message = "Hay aksi! Birkaç şeyi değiştirin ve tekrar göndermeyi deneyin.",
  icon = "flaticon-warning"
}) {
  if (isEnabled) {
    return (
      <div className={`alert alert-${type}`} role="alert">
        <div className="alert-icon">
          <i className={icon}></i>
        </div>
        <div className="alert-text">{message}</div>
      </div>
    );
  }

  return null;
}
