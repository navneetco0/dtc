import { HStack, Text } from "@chakra-ui/react"

export const Navbar = ()=>{
    return (
        <HStack padding={"10px 40px"} justifyContent={"space-between"}>
            <Text fontWeight={"bold"} fontSize={"3xl"}>D2C</Text>
        </HStack>
    )
}