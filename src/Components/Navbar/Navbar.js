import React, { useState, useRef } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  Box,
  Button,
  useColorMode,
  Text,
  Image,
  useBreakpointValue,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import css from "./Navbar.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsWhatsapp, BsMoon } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import LogoDark from "../../assets/Logo/logoDark.png";
import LogoWhite from "../../assets/Logo/logoWhite.png";
import { Link } from "react-router-dom";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <div className={css.mainContainer}>
        <div className={css.Container}>
          {colorMode === "light" ? (
            <Image src={LogoDark} w="40px" h="40px" />
          ) : (
            <Image src={LogoWhite} w="40px" h="40px" />
          )}
        </div>
        {isDesktop ? (
          <div className={css.listItem}>
            <ul>
              <Link to="/">
                <Text
                  color="Gray"
                  _hover={
                    colorMode === "light"
                      ? { color: "Black" }
                      : { color: "White" }
                  }
                >
                  Home
                </Text>
              </Link>
              <Link to="#">
                <Menu>
                  <MenuButton
                    color="Gray"
                    _hover={
                      colorMode === "light"
                        ? { color: "Black" }
                        : { color: "White" }
                    }
                  >
                    Projects
                  </MenuButton>
                  <Portal>
                    <MenuList border="none">
                      <MenuItem className={css.MenuItem}>
                        <Link to="https://hadiyaalii.github.io/weddings">
                          <Text
                            color="Gray"
                            _hover={
                              colorMode === "light"
                                ? { color: "Black" }
                                : { color: "White" }
                            }
                          >
                            Weddings
                          </Text>
                        </Link>
                      </MenuItem>
                      <MenuItem className={css.MenuItem}>
                        <Link to="https://hadiyaalii.github.io/products">
                          <Text
                            color="Gray"
                            _hover={
                              colorMode === "light"
                                ? { color: "Black" }
                                : { color: "White" }
                            }
                          >
                            Brands
                          </Text>
                        </Link>
                      </MenuItem>
                      <MenuItem className={css.MenuItem}>
                        <Link to="https://hadiyaalii.github.io/food">
                          <Text
                            color="Gray"
                            _hover={
                              colorMode === "light"
                                ? { color: "Black" }
                                : { color: "White" }
                            }
                          >
                            Food
                          </Text>
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </Portal>
                </Menu>
              </Link>
              <span>
                <Link to="/about">
                  <Text
                    color="Gray"
                    _hover={
                      colorMode === "light"
                        ? { color: "Black" }
                        : { color: "White" }
                    }
                  >
                    About
                  </Text>
                </Link>
              </span>
              <Link to="https://hadiyaalii.github.io/equipments">
                <Text
                  color="Gray"
                  _hover={
                    colorMode === "light"
                      ? { color: "Black" }
                      : { color: "White" }
                  }
                >
                  Equipments
                </Text>
              </Link>
              <Link to="https://hadiyaalii.github.io/testimonials">
                <Text
                  color="Gray"
                  _hover={
                    colorMode === "light"
                      ? { color: "Black" }
                      : { color: "White" }
                  }
                >
                  Testimonials
                </Text>
              </Link>
              <Box
                color="Gray"
                _hover={
                  colorMode === "light"
                    ? { color: "Black" }
                    : { color: "White" }
                }
              >
                <a
                  href="https://www.facebook.com/hadiyasphotography/"
                  target="_blank"
                >
                  <BsFacebook />
                </a>
              </Box>
              <Box
                color="Gray"
                _hover={
                  colorMode === "light"
                    ? { color: "Black" }
                    : { color: "White" }
                }
              >
                <a
                  href="https://www.instagram.com/hadiyaali_photography/"
                  target="_blank"
                >
                  <AiFillInstagram />
                </a>
              </Box>
              <Box
                color="Gray"
                _hover={
                  colorMode === "light"
                    ? { color: "Black" }
                    : { color: "White" }
                }
                className={colorMode === "light" ? css.Icon : css.IconDarkMode}
              >
                <a href="https://www.tiktok.com/@ali.hadiya" target="_blank">
                  <FaTiktok />
                </a>
              </Box>
              <Box
                color="Gray"
                _hover={
                  colorMode === "light"
                    ? { color: "Black" }
                    : { color: "White" }
                }
              >
                <a href="https://wa.me/+60167518350" target="_blank">
                  <BsWhatsapp />
                </a>
              </Box>
              <Box
                className={css.box}
                cursor="pointer"
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? <MdSunny /> : <BsMoon />}
              </Box>
            </ul>
          </div>
        ) : (
          <>
            <Box className={css.box} cursor="pointer" onClick={toggleColorMode}>
              {colorMode === "light" ? <MdSunny /> : <BsMoon />}
            </Box>
            <IconButton
              onClick={onOpen}
              variant="ghost"
              icon={<FiMenu fontSize="1.25rem" />}
              aria-label="Open Menu"
            />
            <>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent p="25px">
                  <ul>
                    <Link to="/">
                      <Text mb="15px">Home</Text>
                    </Link>
                    <Accordion
                      mb="15px"
                      border="0px solid transparent"
                      allowMultiple
                    >
                      <AccordionItem>
                        <h2>
                          <AccordionButton p="0px">
                            <Box>Projects</Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel p="0px 4px">
                          <Link to="https://hadiyaalii.github.io/weddings">
                            <Text m="15px 0px">• Weddings</Text>
                          </Link>
                          <Link to="https://hadiyaalii.github.io/products">
                            <Text mb="15px">• Brands</Text>
                          </Link>
                          <Link to="https://hadiyaalii.github.io/food">
                            <Text mb="0px">• Food</Text>
                          </Link>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>

                    <span>
                      <Link to="/about">
                        <Text mb="15px">About</Text>
                      </Link>
                    </span>
                    <Link to="https://hadiyaalii.github.io/equipments">
                      <Text mb="15px">Equipments</Text>
                    </Link>
                    <Link to="https://hadiyaalii.github.io/testimonials">
                      <Text mb="15px">Testimonials</Text>
                    </Link>

                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      mt="25px"
                    >
                      <Box>
                        <a
                          href="https://www.facebook.com/hadiyasphotography/"
                          target="_blank"
                        >
                          <BsFacebook />
                        </a>
                      </Box>
                      <Box>
                        <a
                          href="https://www.instagram.com/hadiyaali_photography/"
                          target="_blank"
                        >
                          <AiFillInstagram />
                        </a>
                      </Box>
                      <Box>
                        <a
                          href="https://www.tiktok.com/@ali.hadiya"
                          target="_blank"
                        >
                          <FaTiktok />
                        </a>
                      </Box>
                      <Box>
                        <a href="https://wa.me/+60167518350" target="_blank">
                          <BsWhatsapp />
                        </a>
                      </Box>
                    </Box>
                  </ul>

                  <DrawerCloseButton />
                </DrawerContent>
              </Drawer>
            </>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
