// import Image from "../../resources/video.png";

import {
  StyledMainSectionContainer,
  StyledTitleSection,
  StyledSubHeading,
  StyledTextContainer,
  StyledInnerContainer,
  StyledImageSideContainer,
} from "./elements";

import Image from "next/image";

export const Main = ({ title, subTitle, image }) => {
  return (
    <StyledMainSectionContainer>
      <StyledTextContainer>
        <StyledTitleSection>{title}</StyledTitleSection>
        <StyledSubHeading>{subTitle}</StyledSubHeading>
      </StyledTextContainer>
      <StyledInnerContainer>
        <StyledImageSideContainer>
          <Image
            layout="fill"
            src={image.src}
            alt={image.alt}
            width={image.width}
          />
        </StyledImageSideContainer>
      </StyledInnerContainer>
    </StyledMainSectionContainer>
  );
};
