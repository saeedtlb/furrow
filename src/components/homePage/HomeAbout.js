import React from "react";

import { Container, Flex } from "../../styles/globalStyles";

const HomeAbout = () => {
  return (
    <HomeAboutSection>
      <Container>
        <Flex>
          <About>
            <h2></h2>
            <p></p>
          </About>
          <Services></Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  );
};

export default HomeAbout;
