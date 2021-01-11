import React, { useState, useEffect } from 'react';
import { InputWrapper, InputLabel, InputField } from './Input.styled';

function Input({ rounded, fieldType, label, handleChange,value }) {
    return (
        <InputWrapper rounded={rounded}>
            <InputField
                onChange={handleChange}
                value={value}
                type={fieldType}
                placeholder=" "
            />
            <InputLabel>{label}</InputLabel>
        </InputWrapper>
    );
}

export default Input;
