import React, { useState, useEffect } from 'react';
import { InputWrapper, InputLabel, InputField } from './Input.styled';

const Input = React.forwardRef(
    ({ rounded, fieldType, label, handleChange, value,name }, ref) => {
        return (
            <InputWrapper rounded={rounded}>
                <InputField
                    onChange={handleChange}
                    value={value}
                    type={fieldType}
                    name={name}
                    placeholder=" "
                    ref={ref}
                    
                />
                <InputLabel>{label}</InputLabel>
            </InputWrapper>
        );
    }
);

export default Input;
