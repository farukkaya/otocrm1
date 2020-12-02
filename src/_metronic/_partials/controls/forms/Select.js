import React, { useEffect, useState } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useField } from "formik";
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

export function Select({
  label,
  autoSelect = false,
  addEmptyOption = true,
  withFeedbackLabel = true,
  type = "text",
  customFeedbackLabel,
  disabledOption,
  options = [],
  optionLabel="name",
  ...props
}) {

  const [field, meta] = useField(props);
  const { touched, error /*, value*/ } = meta;
  // const [val, setValue] = React.useState(options[0]);
  // const [inputValue, setInputValue] = React.useState('');

  return (
    <>
      {label && <label>{label} Seçiniz</label>}
      <>
            <select
              className={getFieldCSSClasses(touched, error)}
              {...field}
              {...props}
            >
              {addEmptyOption && <option value={undefined} />}
              {options.map((item) => (

                item.id !== disabledOption && (
                  <option key={item.id} value={item.id}>
                    {item[optionLabel]}
                  </option>
                )

              ))}
            </select>
            {withFeedbackLabel && (
              <FieldFeedbackLabel
                error={error}
                touched={touched}
                label={label}
                type={type}

                customFeedbackLabel={customFeedbackLabel}
              />
            )}
          </>
      {/* {
        autoSelect ? (
          <Autocomplete
            {...props}
            type={type}
            value={val}
            onChange={(event, newValue) => {
              setValue(newValue.id);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            getOptionLabel={(option) => option[optionLabel]}
            options={options}
            noOptionsText="Seçenek Yok"
            renderInput={(params) => {
              return (
                <div ref={params.InputProps.ref} className="inner-addon right-addon">
                  <i className="glyphicon fas fa-chevron-down"></i>
                  <input {...params.inputProps}
                    type={type}
                    className={getFieldCSSClasses(touched, error)}
                    name={field.name}
                  // value={field.value}
                  />
                  {withFeedbackLabel && (
                    <FieldFeedbackLabel
                      error={error}
                      touched={touched}
                      label={label}
                      type={type}

                      customFeedbackLabel={customFeedbackLabel}
                    />
                  )}
                </div>
              )
            }
            }
          />
        ): 
      } */}



    </>
  );
}
