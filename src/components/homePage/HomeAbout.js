import React, { useEffect } from "react";

// COMPONENT
import { Accordion } from "../utils/Accordion";

// DATA
import { accordionIds, Animate_property } from "../utils/misc";

// STYLED-COMPONENT
import { Container, Flex } from "../../styles/globalStyles";
import { Services, About } from "../../styles/homeStyles";
import { motion } from "framer-motion";

const HomeAbout = ({ onCursor }) => {
  const animation = useAnimation();
  const [abouttRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <motion.div
      ref={abouttRef}
      animate={animation}
      initial="hidden"
      variants={Animate_property}
    >
      <Container>
        <Flex alignTop>
          <About>
            <h2>
              Furrow is an integrated, full-service creative studio offering
              video production, creative development, and post-production
              services.
            </h2>
            <p>
              Everybody’s got a story. And we don’t stop until we’ve uncovered
              what makes yours worth telling. Whether it’s working directly with
              you, an agency partner, or putting the finishing touches on
              something special, we’re ready to dig in and get our hands
              dirty—are you?
            </p>
          </About>
          <Services>
            <h3>Services</h3>
            {accordionIds.map((details, i) => (
              <Accordion key={i} details={details} onCursor={onCursor} />
            ))}
          </Services>
        </Flex>
      </Container>
    </motion.div>
  );
};

export default HomeAbout;
