import styled from "styled-components";

//prettier-ignore
export const StyledCardContainer = styled((props) => <div {...props} />)`
background-color: #f2f2f2;
font-family: Poppins;
font-size: 0.85rem;
line-height: 1.125rem;
display: flex;
align-items: center;
justify-content: center;
margin: 2rem 0;
border: 1px solid transparent;
&:hover,
&:focus,
&:active {
    border: 1px solid;
    border-color: #0070f3;
  }
&:hover h3{
  color: #0070f3;
  text-decoration: underline;
}
`
//pretier-ignrore
export const StyledIconBoxCardContainer = styled((props) => (
  <div {...props} />
))``;
//pretier-ignore
export const StyledTextBoxCardContainer = styled((props) => <div {...props} />)`
  padding: 0.8rem 3.2rem;
  text-align: left;
  p > span {
    font-weight: 700;
  }
`;
