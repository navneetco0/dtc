import { HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <HStack
      padding={"5px 5%"}
      justifyContent={"space-between"}
      position="fixed"
      bg={scrolled? "white" : "transparent"}
    >
      <Text fontWeight={"bold"} fontSize={["xl","3xl"]}>
        D2C
      </Text>
    </HStack>
  );
};
