import React, { useState } from "react";
import styled from "styled-components";


interface SecondaryProps {
    placeholder: string;
    onChange: (value: string) => void;
}

const PrimaryInput = styled.input`
    padding: 8px;
    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme.inputBorderColor};
    outline: none;
    &:focus {
        border: 2px solid ${(props) => props.theme.pressedColor};
    }
`;

const InputWrapper = styled.div`
    position: relative;
    height: 40px;
`;

const EyeIconWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    cursor: pointer;
`;

const PasswordInput = styled(PrimaryInput)`
    padding-right: 32px; /* Space for the eye icon */
`;

export default function Secondary(secondaryProps: SecondaryProps) {
    const { placeholder, onChange } = secondaryProps;

    const [currentValue, setCurrentValue] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.target.value);
        if (onChange) onChange(event.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <InputWrapper>
            <PasswordInput
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                value={currentValue}
                onChange={handleChangeText}
            />
            <EyeIconWrapper>
            {/* {
                showPassword ?
                <EyeOutlined />
                :
                <EyeInvisibleOutlined />
            } */}
            </EyeIconWrapper>

        </InputWrapper>
    );
}
