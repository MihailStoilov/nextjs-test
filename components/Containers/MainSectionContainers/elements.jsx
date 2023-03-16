import styled from "styled-components";

//prettier-ignore
export const StyledMainSectionContainer = styled((props) => <div {...props} />)`
  max-width: 1920px;
  width: 100%;
  margin: 4.8rem 0;
  padding: 0 0 2.4rem 0;
`
//prettier-ignore
export const StyledTextContainer = styled((props) => <div {...props} />)`
text-align: center;
`
//prettier-ignore
export const StyledInnerContainer = styled((props) => <div {...props} />)`
margin: 3.6rem 0rem;
padding: 1.2rem 10rem;
display:flex;
gap: 2rem;
  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1.2rem 2.4rem;
  }
`
//prettier-ignore
export const StyledImageSideContainer = styled((props) => <div {...props} />)`
width: 45%;
`

export const StyledCardSideContainer = styled((props) => <div {...props} />)`
  padding: 2.4rem;
`;
