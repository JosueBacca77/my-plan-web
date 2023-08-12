import { ReactNode } from "react";
import styled from "styled-components";

const GenericCard = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

interface CardProps {
    children: ReactNode
}

export default function Card(cardProps: CardProps){

    const { children } = cardProps;

    return(
        <GenericCard>
            {children}
        </GenericCard>
    )
}