import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from './Movies'

function Home() {
  return <Container>
    <ImageSlider/>
    <Viewers/>
    <Movies/>
  </Container>;
}

export default Home;

const Container = styled.main`
  position: relative;
  content: "";
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw - 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
