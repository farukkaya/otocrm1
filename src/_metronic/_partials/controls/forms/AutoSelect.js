import React, { useEffect, useState } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useField} from "formik";
import {FieldFeedbackLabel} from "./FieldFeedbackLabel";
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
export const AutoSelect = ({
    required,
    type="text",
    label,
    form,
    options=[],
    fullWidth,
    margin,
    field,
    placeholder,
    withFeedbackLabel=false,
    customFeedbackLabel,
    ...props
}) => {
    const [meta] = useField(props);
    const { touched, error,value } = meta;
    const [val, setValue] = useState(value)
    useEffect(() => {
        setValue(options.find((q) => q.id === field.value))
    }, [value])
    return (
       <>
        {label && <label>{label} Seçiniz..</label>}
        <Autocomplete
            {...props}
            type={type}
            value={val}
            onChange={(event, newValue) => {
                setValue(newValue);
              }}
            getOptionLabel={(option) => option.name}
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
                         />
                    </div>
                )
            }
            }
        />
        {withFeedbackLabel && (
        <FieldFeedbackLabel
          erros={error}
          touched={touched}
          label={label}
          type={type}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
       </>
    )
}