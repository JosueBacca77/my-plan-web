import Primary from "./Primary/Primary";
import Secondary from "./Secondary/Secondary";

export enum InputVersion {
    PRIMARY='primary',
    SECONDARY='secondary'
}

interface InputProps {
    version: InputVersion;
    onChange: (value: string)=> void;
    placeholder: string
}

export default function Input(inputProps: InputProps){

    const { version, onChange, placeholder } = inputProps;

    switch (version) {
        case InputVersion.PRIMARY:
            return(
                <Primary 
                    onChange={onChange}
                    placeholder={placeholder}
                />
            )

        case InputVersion.SECONDARY:
            return(
                <Secondary
                    onChange={onChange}
                    placeholder={placeholder}
                />
            )
        default:
            return(
                <Primary 
                    onChange={onChange}
                    placeholder={placeholder}
                />
            )
    }
}