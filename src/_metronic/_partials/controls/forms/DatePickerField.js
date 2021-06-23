import React from "react";
import {useField, useFormikContext} from "formik";
import DatePicker from "react-datepicker";

const getFieldCSSClasses = (touched, errors) => {
  const classes = ["form-control","form-control-solid"];
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
export function DatePickerField({ ...props }) {
  const { setFieldValue, errors, touched } = useFormikContext();
  const [field] = useField(props);
  
  return (
    <>
      {props.label && <label>{props.label}</label>}
      <div className={getGroupCSSClasses(touched[field.name], errors[field.name])}>
      <DatePicker
        className={getFieldCSSClasses(touched[field.name], errors[field.name])}
        style={{ width: "100%" }}
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={val => {
          setFieldValue(field.name, val);
        }}
      />
        </div>
      {errors[field.name] && touched[field.name] ? (
        <div className="invalid-datepicker-feedback">
          {errors[field.name].toString()}
        </div>

      ) : (
        <div className="feedback">
          Lütfen <b>{props.label}</b> seçiniz
        </div>
      )}
    
    </>
  );
}
