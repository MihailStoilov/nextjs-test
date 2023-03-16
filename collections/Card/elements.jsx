// Styled elements for the Card go here
import styled from "styled-components";
import { CardContainer } from "../../components/Containers/CardContainers/CardContainer";
import { IconBoxCardContainer } from "../../components/Containers/CardContainers/IconBoxCardContainer";
import { TextBoxCardContainer } from "../../components/Containers/CardContainers/TextBoxCardContainer";

//pretier-ignore
export const StyledCardContainer = styled((props) => (
  <CardContainer {...props} />
))``;

//prettier-ignore
export const StyledIconBoxCardContainer = styled((props) => <IconBoxCardContainer {...props} />)``;
//prettier-ignore
export const StyledTextBoxCardContainer = styled((props) => <TextBoxCardContainer {...props} />)``;
