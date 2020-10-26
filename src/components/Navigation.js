import React, { useState } from "react";
import { Link } from "gatsby";

import { navRoutes } from "./utils/navRoutes";

// ANIMATION
import { motion, AnimatePresence } from "framer-motion";

// CONTEXT
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext";
import { change_Menu } from "../actions/action";

// STYLED-COMPONENT
import { Container, Flex } from "../styles/globalStyles";
import {
  Nav,
  NavHeader,
  NavFooter,
  CloseNav,
  NavList,
  NavVideos,
} from "../styles/navigationStyles";

const Navigation = ({ onCursor }) => {
  const [toggleMenu] = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: "featured-video.mp4",
    key: "0",
  });

  return (
    <AnimatePresence>
      {toggleMenu && (
        <Nav
          initial={{ x: "-100%" }}
          exit={{ x: "-100%" }}
          animate={{ x: toggleMenu ? 0 : "-100%" }}
          transition={{ duration: 0.8, ease: [0.6, 0.5, -0.01, 0.9] }}
        >
          <Container>
            <NavHeader>
              <Flex spaceBetween noHeight>
                <h2>projects</h2>
                <CloseNav
                  onMouseEnter={() => onCursor("pointer")}
                  onMouseLeave={onCursor}
                  onClick={dispatch(change_Menu(toggleMenu))}
                >
                  <button>
                    <span></span>
                    <span></span>
                  </button>
                </CloseNav>
              </Flex>
            </NavHeader>
            <NavList>
              <ul>
                {navRoutes.map(route => (
                  <motion.li
                    key={route.id}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                    onHoverStart={() =>
                      setRevealVideo({
                        show: true,
                        video: route.video,
                        key: route.id,
                      })
                    }
                    onHoverEnd={() =>
                      setRevealVideo(prv => ({
                        ...prv,
                        show: false,
                      }))
                    }
                  >
                    <Link to={`/projects/${route.path}`}>
                      <motion.div
                        className="link"
                        initial={{ x: -108 }}
                        whileHover={{
                          x: -40,
                          transition: {
                            duration: 0.4,
                            ease: [0.6, 0.05, -0.01, 0.9],
                          },
                        }}
                      >
                        <span className="arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 101 57"
                          >
                            <path
                              d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                              fill="#FFF"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        {route.title}
                      </motion.div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </NavList>
            <NavFooter></NavFooter>
            <NavVideos>
              <motion.div
                className="reveal"
                animate={{ width: revealVideo.show ? 0 : "100%" }}
              ></motion.div>
              <div className="video">
                <AnimatePresence initial={false} exitBeforeEnter>
                  <motin.video
                    key={revealVideo.key}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                    src={require(`../assets/video/${revealVideo.video}`)}
                    autoPlay
                    loop
                  ></motin.video>
                </AnimatePresence>
              </div>
            </NavVideos>
          </Container>
        </Nav>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
