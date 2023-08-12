import { useState } from "react";
import styled from "styled-components";

interface PrimaryProps {
    placeholder: string;
    onChange: (value: string) => void
}

const PrimaryInput = styled.input`
    padding: 8px;
    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme.inputBorderColor};
    outline: none;
    &:focus {
        border: 2px solid ${(props) => props.theme.inputFocusedBorderColor};
    }
`;

const InputWrapper = styled.div`
    height: 40px;
`;

export default function Primary(primaryProps: PrimaryProps){

    const { placeholder, onChange } = primaryProps;

    const [currentvalue, setCurrentValue] = useState<string>('');



    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.target.value)
        if (onChange) onChange(event.target.value)
    };

    return(
        <InputWrapper>
                <PrimaryInput
            placeholder={placeholder}
            value={currentvalue}
            onChange={handleChangeText}
        />
        </InputWrapper>

    )
}
