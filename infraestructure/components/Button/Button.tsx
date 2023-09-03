import styled from "styled-components";

interface ButtonProps {
    onClick: ()=>void;
    text: string
}

const PrimaryButton = styled.button`
    padding: 8px;
    border-radius: 0.25rem;
    border: none;
    background-color: ${(props) => props.theme.mainColor};
    &:hover {
        background-color: ${(props) => props.theme.hoverColor};
    }
    &:active {
        background-color: ${(props) => props.theme.pressedColor};
    }
    color: ${(props) => props.theme.background};
    font-weight: bold;
    width: 200px;

`;

export default function Button(buttonProps:ButtonProps){

    const { text, onClick } = buttonProps;


    const handleClick = () => {
      if(onClick) onClick();
    };

    return(
        <PrimaryButton
            onClick={handleClick}
        >
            {text}
        </PrimaryButton>
    )

}