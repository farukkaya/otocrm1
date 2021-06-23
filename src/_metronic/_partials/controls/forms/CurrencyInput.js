import React from "react";
import PropTypes from 'prop-types'
import { FieldFeedbackLabel } from "./FieldFeedbackLabel";
import MaskedInput from "react-text-mask";
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 9, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
}

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
export const CurrencyInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = true,
  customFeedbackLabel,
  type = "text",
  adornment,
  maskOptions,
  ...props
}) =>{
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  })
  return (
    <>
      {label && <label>{label} girin</label>}
      <div className={getGroupCSSClasses(touched[field.name], errors[field.name])}>
            {adornment?.startAdorment && <div className="input-group-prepend"><span className="input-group-text" style={adornment.startAdorment.style}>
              {
                adornment?.startAdorment.type == "icon" ? <i className={adornment.startAdorment.icon}></i> : <b>{adornment.startAdorment.icon}</b>
              }
            </span></div>}
            <MaskedInput
                  {...field}
                  {...props}
                  className={getFieldCSSClasses(touched[field.name], errors[field.name])}
                  mask={currencyMask}
                  type={type}
                />
            
  
            {adornment?.endAdorment && <div className="input-group-prepend"><span className="input-group-text" style={adornment.endAdorment.style}>
              {
                adornment?.endAdorment.type == "icon" ? <i className={adornment.endAdorment.icon}></i> : <b>{adornment.endAdorment.icon}</b>
              }
            </span></div>}
    
          </div>
     

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
  );
}




