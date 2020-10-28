import React, { useRef } from "react";

// STYLED-COMPONENT
import { Container, Flex } from "../styles/globalStyles";
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles";

// ICONS
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons";

// CUSTOM-HOOK
import useElementPosition from "../hooks/useElementPosition";

const Footer = ({ onCursor, setHamburgerPosition }) => {
  const instagramRef = useRef(null);
  const instagram = useElementPosition(instagramRef);

  const facebookRef = useRef(null);
  const facebook = useElementPosition(facebookRef);

  const vimeoRef = useRef(null);
  const vimeo = useElementPosition(vimeoRef);

  const menuHover = ({ x }) => {
    onCursor("locked");
    setHamburgerPosition({ x });
  };

  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween>
          <FooterContent>
            <p>902.315.1234</p>
            <p>info@furrow.studio</p>
          </FooterContent>
          <FooterContent wider>
            <p>15 Cam at Unit 8</p>
            <p>university, PE C32 0E2</p>
          </FooterContent>
          <FooterSocial>
            <a
              ref={instagramRef}
              onMouseEnter={() => menuHover(instagram)}
              onMouseLeave={onCursor}
              href="#"
            >
              <Instagram />
            </a>
            <a
              ref={facebookRef}
              onMouseEnter={() => menuHover(facebook)}
              onMouseLeave={onCursor}
              href="#"
            >
              <Facebook />
            </a>
            <a
              ref={vimeoRef}
              onMouseEnter={() => menuHover(vimeo)}
              onMouseLeave={onCursor}
              href="#"
            >
              <Vimeo />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  );
};

export default Footer;
