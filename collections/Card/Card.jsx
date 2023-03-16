// The Card to be exported goes here
import {
  StyledCardContainer,
  StyledIconBoxCardContainer,
  StyledTextBoxCardContainer,
} from "./elements";

export const Card = ({ icon, title, description, ...props }) => {
  return (
    <StyledCardContainer>
      <StyledIconBoxCardContainer>
        <img
          src={icon}
          alt=""
          srcset=""
          style={{ width: "100%", height: "100%" }}
        />
      </StyledIconBoxCardContainer>
      <StyledTextBoxCardContainer>
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </StyledTextBoxCardContainer>
    </StyledCardContainer>
  );
};
