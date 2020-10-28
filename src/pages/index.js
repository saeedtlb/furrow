import React from "react";
import Layout from "../components/Layout";

// COMPONENTS
import HomeBanner from "../components/homePage/HomeBanner";
import HomeContent from "../components/homePage/HomeContent";
import HomeFeatured from "../components/homePage/HomeFeatured";
import HomeAbout from "../components/homePage/HomeAbout";

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext";
import { cursor_style } from "../actions/action";

const IndexPage = () => {
  const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const onCursor = type => {
    type = cursorStyles.includes(type) && type;
    dispatch(cursor_style(type));
  };

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured onCursor={onCursor} />
      <HomeAbout onCursor={onCursor} />
    </Layout>
  );
};

export default IndexPage;
