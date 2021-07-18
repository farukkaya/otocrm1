import React from "react";
import { FieldFeedbackLabel } from "./FieldFeedbackLabel";

const getFieldCSSClasses = (touched, errors) => {
  const classes = ["form-control", "form-control-solid"];
  if (touched && errors) {
    classes.push("is-invalid");
  }

  if (touched && !errors) {
    classes.push("is-valid");
  }

  return classes.join(" ");
};
const getGroupCSSClasses = (touched, errors) => {
  const classes = ["input-group","input-group-lg","input-group-solid"];
  if (touched && errors) {
    classes.push("is-invalid");
  }

  if (touched && !errors) {
    classes.push("is-valid");
  }

  return classes.join(" ");
};

export const Input = React.memo(({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = true,
  customFeedbackLabel,
  type = "text",
  adornment,
  ...props
}) => {
  return (
    <>
      {label && <label>{label} girin</label>}
      {
        type === "textarea" && (
          <textarea
            type={type}
            className={getFieldCSSClasses(touched[field.name], errors[field.name])}
            {...field}
            {...props}
          />
        )
      }
      {
        type !== "textarea" && (
          <div className={getGroupCSSClasses(touched[field.name], errors[field.name])}>
            {adornment?.startAdorment && <div className="input-group-prepend"><span className="input-group-text" style={adornment.startAdorment.style}>
              {
                adornment?.startAdorment.type == "icon" ? <i className={adornment.startAdorment.icon}></i> : <b>{adornment.startAdorment.icon}</b>
              }
            </span></div>}

            <input
              type={type}
              className={getFieldCSSClasses(touched[field.name], errors[field.name])}
              {...field}
              {...props}
            />
  
            {adornment?.endAdorment && <div className="input-group-prepend"><span className="input-group-text" style={adornment.endAdorment.style}>
              {
                adornment?.endAdorment.type == "icon" ? <i className={adornment.endAdorment.icon}></i> : <b>{adornment.endAdorment.icon}</b>
              }
            </span></div>}
    
          </div>
        )
      }

         {withFeedbackLabel && (
          <FieldFeedbackLabel
            error={errors[field.name]}
            touched={touched[field.name]}
            label={label}
            type={type}
            customFeedbackLabel={customFeedbackLabel}
          />
        )}
    </>
  )
});
