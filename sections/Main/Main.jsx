import {
  StyledMainSectionContainer,
  StyledTitleSection,
  StyledSubHeading,
  StyledTextContainer,
  StyledInnerContainer,
  StyledImageSideContainer,
  StyledCardSideContainer,
} from "./elements";

import Image from "next/image";
import { Card } from "../../collections/Card/Card";

export const Main = ({ title, subTitle, image, cards }) => {
  return (
    <StyledMainSectionContainer>
      <StyledTextContainer>
        <StyledTitleSection>{title}</StyledTitleSection>
        <StyledSubHeading>{subTitle}</StyledSubHeading>
      </StyledTextContainer>
      <StyledInnerContainer>
        <StyledImageSideContainer>
          <Image
            layout="fixed"
            src={image.src}
            alt="video picture"
            width={350}
            height={600}
          />
        </StyledImageSideContainer>
        <StyledCardSideContainer>
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon.src}
            />
          ))}
        </StyledCardSideContainer>
      </StyledInnerContainer>
    </StyledMainSectionContainer>
  );
};
