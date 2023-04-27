import { Box, HStack, Show, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Right, Left, Down } from "@/assets/svg";
import {
  company,
  delivery_boy,
  saving,
  district,
  no_money,
  retailer,
  shop,
  state,
} from "@/assets";

export const ShowOff = () => {
  const traditional = [
    { image: company, text: "Company" },
    { image: state, text: "State" },
    { image: district, text: "District" },
    { image: retailer, text: "Retailer" },
    { image: shop, text: "Shop" },
    { image: no_money, text: "No Money" },
  ];
  const d2c = [
    { image: company, text: "Company" },
    { image: delivery_boy, text: "D2C" },
    { image: saving, text: "Save more than 40%" },
  ];

  return (
    <VStack
      spacing={4}
      w="100%"
      p="5%"
      minH="100vh"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text
       mt="20px"
        fontWeight={"bold"}
        fontSize={["sm", "lg", "2xl", "3xl"]}
        textAlign={"center"}
      >
        {" "}
        Saving is Saving Doesn’t Matter how much{" "}
      </Text>

      <Show above="md">
        <Box bg={"blue.100"} borderRadius={"10px"} p="20px" w="100%">
          <Text
            fontWeight={"bold"}
            fontSize={["sm", "2xl"]}
            textAlign={"center"}
          >
            Traditional Marketing System
          </Text>
          <HStack mt="10px" justifyContent={"space-between"}>
            {traditional?.map((item, index) => (
              <Card
                icon={Right}
                key={index}
                data={item}
                next={index < traditional.length - 1}
              />
            ))}
          </HStack>
        </Box>
      </Show>

      <Show above={"540px"}>
        <Show below={"767px"}>
          <Box bg={"blue.100"} borderRadius={"10px"} p="20px" w="100%">
            <Text
              fontWeight={"bold"}
              fontSize={["sm", "2xl"]}
              textAlign={"center"}
            >
              Traditional Marketing System
            </Text>
            <HStack mt="10px" justifyContent={"space-between"}>
              {[0, 1, 2]?.map((item, index) => (
                <Card
                 size={80}
                  icon={Right}
                  key={index}
                  data={traditional[item]}
                  next={index < 2}
                />
              ))}
            </HStack>
            <HStack justifyContent={"flex-end"}>
              <Image
                style={{ marginRight: 20 }}
                src={Down}
                alt="Down"
                height={30}
                width={30}
              />
            </HStack>
            <HStack mt="10px" justifyContent={"space-between"}>
              {[5, 4, 3]?.map((item, index) => (
                <Card
                size={80}
                  icon={Left}
                  key={index}
                  data={traditional[item]}
                  next={index < 2}
                />
              ))}
            </HStack>
          </Box>
        </Show>

        <Box bg={"blue.100"} borderRadius={"10px"} p="20px" w="100%">
          <Text
            fontWeight={"bold"}
            fontSize={["sm", "2xl"]}
            textAlign={"center"}
          >
            D2C Marketing System
          </Text>
          <HStack mt="10px" justifyContent={"space-between"}>
            {d2c?.map((item, index) => (
              <Card
                icon={Right}
                key={index}
                data={item}
                next={index < d2c.length - 1}
              />
            ))}
          </HStack>
        </Box>
      </Show>

      <Show below="539px">
        <HStack spacing={4} w="100%">
          <VStack bg={"blue.100"} borderRadius={"10px"} p="20px" w="100%">
            <Text
              fontWeight={"bold"}
              fontSize={["sm"]}
              textAlign={"center"}
            >
              Traditional Marketing System
            </Text>
            {traditional?.map((item, index) => (
              <Card
                icon={Down}
                size={30}
                key={index}
                data={item}
                next={index < traditional.length - 1}
              />
            ))}
          </VStack>
          <VStack  bg={"blue.100"} borderRadius={"10px"} p="20px" w="100%">
            <Text
              fontWeight={"bold"}
              fontSize={["sm", "2xl"]}
              textAlign={"center"}
            >
              D2C Marketing System
            </Text>
            {d2c?.map((item, index) => (
              <Card
                size={40}
                icon={Down}
                key={index}
                data={item}
                next={index < d2c.length - 1}
              />
            ))}
          </VStack>
        </HStack>
      </Show>
    </VStack>
  );
};

const Card = (props: any) => {
  const { data, next, icon, size } = props;
  const { image, text } = data;
  return (
    <>
      <VStack>
        <Image src={image?.src} alt={text} height={size || 100} width={size || 100} />
        <Text textAlign={"center"} fontWeight={"bold"} fontSize={["sm", "md"]}>
          {text}
        </Text>
      </VStack>
      {next && <Image src={icon} alt={"right"} height={size/2.5 || 40} width={ size/2.5 || 40} />}
    </>
  );
};
