import React from 'react';
import { Box } from "@chakra-ui/react";
import { Flex } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

function Home(){
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
                        <Input
                            placeholder = "Enter a city"
                            variant="filled"
                            bg="white"
                            htmlSize={80}
                            color="black"
                            width="auto"
                            size="lg"
                        />
                        <Input
                            placeholder = "Enter a species"
                            variant="filled"
                            bg="white"
                            htmlSize={80}
                            color="black"
                            width="auto"
                            size="lg"
                        />
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Home;