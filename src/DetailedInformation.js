import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

function DetailedInformation(){
    return (
       <Flex direction="column">
            <Box minH="10vh" background="bg" p={5} width="100%" color="black">
                <Flex gap = "5" direction="row" justify="space-between" align="center">
                    <Text fontSize="2xl" fontWeight="bold">{""}
                        <Link href="http://localhost:3000/home">BIRDER</Link>
                    </Text>
                    <Flex gap={6}>
                        Enter detailed info stuff here
                    </Flex>
                </Flex>
            </Box>
            <Box minH="90vh" background="cyan.700" width="100%" color="white">
                Enter detailed info code here
            </Box>
        </Flex>
    )
}

export default DetailedInformation;