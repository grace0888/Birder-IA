import React from 'react';
import { Box } from "@chakra-ui/react";
import { Flex } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

function Bookmarks(){
    return (
        <Flex direction="column">
            <Box minH="10vh" background="bg" p={5} width="100%" color="black">
                <Flex gap = "5" direction="row" justify="space-between" align="center">
                    <Text fontSize="2xl" fontWeight="bold">{""}
                        <Link href="http://localhost:3000/home">BIRDER</Link>
                    </Text>
                    <Flex gap={6}>
                        <Link href="http://localhost:3000/home">Home</Link>
                        <Link href="http://localhost:3000/uploaded-images">Uploaded Images</Link>
                        <Link href="http://localhost:3000/bookmarks" fontWeight="bold" borderBottom="2px solid black">Bookmarks</Link>
                    </Flex>
                </Flex>
            </Box>
            <Box minH="90vh" background="cyan.700" width="100%" color="white">
                Enter bookmarks code here
            </Box>
        </Flex>
    )
}

export default Bookmarks;