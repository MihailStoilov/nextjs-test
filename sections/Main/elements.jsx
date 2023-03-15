import styled from "styled-components";
import { SectionHeading, SectionSubheading } from "~/components";

import { InnerContainer } from "../../components/Containers/MainSectionContainers/InnerContainer";
import { MainSectionContainer } from "../../components/Containers/MainSectionContainers/MainSectionContainer";
import { ImageSideContainer } from "../../components/Containers/MainSectionContainers/ImageSideContainer";

//prettier-ignore
export const StyledMainSectionContainer = styled((props) => <MainSectionContainer {...props} />)`
background-image: url(/resources/background.png);
text-align: center;
`

//prettier-ignore
export const StyledTextContainer = styled((props) => <div {...props} />)``;

//prettier-ignore
export const StyledInnerContainer = styled((props) => <InnerContainer {...props} />)``;

//prettier-ignore
export const StyledTitleSection = styled((props) => <SectionHeading {...props} />)`
margin-bottom: 0;
`;

//prettier-ignore
export const StyledSubHeading = styled((props) => <SectionSubheading {...props} />)`
line-height: 0;
`
//prettier-ignore
export const StyledImageSideContainer = styled((props) => <ImageSideContainer {...props} />)`
line-height: 0;
`
