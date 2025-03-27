import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { birdsData } from "./data/birds";

function DetailedInformation(){
    return (
       <Flex direction="column">
            <Box minH="10vh" background="bg" p={5} width="100%" color="black">
                <Flex gap = "5" direction="row" justify="space-between" align="center">
                    <Text fontSize="2xl" fontWeight="bold">{""}
                        <Link href="http://localhost:3000/home">BIRDER</Link>
                    </Text>
                    <Flex gap={6}>
                        <Heading as="h1" size="xl" mb={2} textAlign="center">
                            {birdsData[10].name}
                        </Heading>
                        <Text fontSize="lg" fontStyle="italic" color="gray.600" textAlign="center">
                            {birdsData[10].scientificName}
                        </Text>
                    </Flex>
                </Flex>
            </Box>
            <Box minH="90vh" background="cyan.700" width="100%" color="white">
                {/* Sections */}
                <Box mb={4} p={4}>
                    <Heading as="h3" size="md" mb={2} color="white">
                        Habitat
                    </Heading>
                    <Text>{birdsData[10].habitat}</Text>
                </Box>

                <Box mb={4} p={4}>
                    <Heading as="h3" size="md" mb={2} color="white">
                        Migration
                    </Heading>
                    <Text>{birdsData[10].migration}</Text>
                </Box>

                <Box mb={4} p={4}>
                    <Heading as="h3" size="md" mb={2} color="white">
                        Behavior
                    </Heading>
                    <Text>{birdsData[10].behavior}</Text>
                </Box>
            </Box>
        </Flex>
    )
}

export default DetailedInformation;