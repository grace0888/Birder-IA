import React from 'react';
import { Box } from "@chakra-ui/react";
import { Flex } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { InputGroup } from "./components/ui/input-group"
import { LuSearch } from "react-icons/lu"
import { HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Home(){
    const [city, setCity] = useState("");
    const [species, setSpecies] = useState("");
    const navigate = useNavigate();
  
    const handleKeyPressLocation = (event) => {
      if (event.key === "Enter") {
        navigate("/location-results", { state: { city } });
      }
    };

    const handleKeyPressSpecies = (event) => {
        if (event.key === "Shift") {
          navigate("/species-results", { state: { species } });
        }
      };

    return (
        <Flex direction="column">
            <Box minH="10vh" background="bg" p={5} width="100%" color="black">
                <Flex gap = "5" direction="row" justify="space-between" align="center">
                    <Text fontSize="2xl" fontWeight="bold">BIRDER</Text>
                    <Flex gap={6}>
                        <Link href="http://localhost:3000/home" fontWeight="bold" borderBottom="2px solid black">Home</Link>
                        <Link href="http://localhost:3000/uploaded-images">Uploaded Images</Link>
                        <Link href="http://localhost:3000/bookmarks">Bookmarks</Link>
                    </Flex>
                </Flex>
            </Box>
            <Box minH="90vh" background="cyan.700" width="100%" color="white">
                <Flex minH="80vh" w="100" align="center" justify="center">
                    <Flex direction="column" align="center" gap="10">
                        <HStack gap="10" width="full">
                            <InputGroup
                                flex="1"
                                startElement={<LuSearch />}
                            >
                                <Input
                                    placeholder = "Enter a city"
                                    variant="filled"
                                    bg="white"
                                    htmlSize={80}
                                    color="black"
                                    width="auto"
                                    size="lg"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    onKeyDown={handleKeyPressLocation}
                                />
                            </InputGroup>
                        </HStack>
                        <HStack gap="10" width="full">
                            <InputGroup
                                flex="1"
                                startElement={<LuSearch />}
                            >
                                <Input
                                    placeholder = "Enter a species"
                                    variant="filled"
                                    bg="white"
                                    htmlSize={80}
                                    color="black"
                                    width="auto"
                                    size="lg"
                                    value={species}
                                    onChange={(e) => setSpecies(e.target.value)}
                                    onKeyDown={handleKeyPressSpecies}
                                />
                            </InputGroup>
                        </HStack>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Home;