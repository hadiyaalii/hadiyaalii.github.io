import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Hadiya from "../../assets/About/hadiya.PNG";
import "./About.css";
import { FiBookOpen } from "react-icons/fi";
import { BsFillChatLeftTextFill } from "react-icons/bs";

function About() {
  return (
    <section className="about">
      <Box className="main">
        <Image src={Hadiya} />
        <Box className="about-text">
          <Text as="h2">
            Hadiya Ali, is a creative photgrapher and filmmaker, residing in
            Malaysia, Kuala Lumpur.
          </Text>
          <Text as="p" mt="20px">
            Hi there! My name is Hadiya Ali and I'm currently studying Visual
            Communication with a specialization in photography in Malaysia. I
            have four years of experience as a photographer and I'm skilled in
            using Adobe Lightroom, Photoshop, Premiere Rush, and Procreate. I
            also enjoy creating videos
          </Text>
          <Text mt="10px">
            If you're interested in working with me, feel free to connect. I
            hope you like my work!
          </Text>
          <Box
            margin="25px 0px"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <a
              target="__blank"
              href="https://glaszart.com/an-interview-with-photographer-hadiya-ali/ "
            >
              <BsFillChatLeftTextFill title="My Interview with Glaszart" />
            </a>
            <a
              target="__blank"
              href="https://www.amazon.com/Seizing-Bygone-Light-Tribute-Photography-ebook/dp/B08Z33CRH1 "
            >
              <FiBookOpen title="My book" />
            </a>
            <a
              target="__blank"
              href="https://picturesfromthekitchen.wordpress.com/2021/03/16/my-blog-today-is-from-the-bygone-light-tour-a-tribute-to-early-photography/ "
            >
              <BsFillChatLeftTextFill title="My Interview with Pictures From The Kitchen" />
            </a>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default About;
