import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { InputGroup } from "./components/ui/input-group"
import { LuSearch } from "react-icons/lu"
import { birdsData } from "./data/birds"
import { useState } from 'react';
import { Image } from '@chakra-ui/react';

function SpeciesResults(){
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBirds = birdsData.filter((bird) =>
        bird.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
       <Flex direction="column">
            <Box minH="10vh" background="bg" p={5} width="100%" color="black">
                <Flex gap = "5" direction="row" justify="space-between" align="center">
                    <Text fontSize="2xl" fontWeight="bold">{""}
                        <Link href="http://localhost:3000/home">BIRDER</Link>
                    </Text>
                    <Flex gap={6}>
                        <InputGroup
                            flex="1"
                            startElement={<LuSearch />}
                        >
                            <Input
                                placeholder = "Enter a species"
                                variant="outline"
                                bg="white"
                                htmlSize={80}
                                color="black"
                                width="auto"
                                size="lg"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </InputGroup>
                    </Flex>
                </Flex>
            </Box>
            <Box minH="90vh" background="cyan.700" width="100%" color="white">
                {filteredBirds.map((bird, index) => (
                    <Flex key={index} align="center" bg="cyan.700" p={3} mb={3} borderRadius="md">
                        <Image
                            boxSize="50px"
                            borderRadius="md"
                            src={bird.displayImage}
                            alt={bird.name}
                            bg="white"
                            mr={4}
                        />
                        <Box>
                            <Text fontSize="lg" fontWeight="bold">{bird.name}</Text>
                            <Text fontSize="sm">{bird.scientificName}</Text>
                        </Box>
                    </Flex>
                ))}
            </Box>
        </Flex>
    )
}

export default SpeciesResults;