import React from 'react';
import { Box } from "@chakra-ui/react";
import { Flex } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { FileUploadList, FileUploadRoot, FileUploadTrigger } from './components/ui/file-upload';
import { HiUpload } from 'react-icons/hi'

function UploadedImages(){
    return (
        <Flex direction="column">
            <Box minH="10vh" background="bg" p={5} width="100%" color="black">
                <Flex gap = "5" direction="row" justify="space-between" align="center">
                    <Text fontSize="2xl" fontWeight="bold">{""}
                        <Link href="http://localhost:3000/home">BIRDER</Link>
                    </Text>
                    <Flex gap={6}>
                        <Link href="http://localhost:3000/home">Home</Link>
                        <Link href="http://localhost:3000/uploaded-images" fontWeight="bold" borderBottom="2px solid black">Uploaded Images</Link>
                        <Link href="http://localhost:3000/bookmarks">Bookmarks</Link>
                    </Flex>
                </Flex>
            </Box>
            <Box minH="90vh" background="cyan.700" width="100%" color="white">
                <FileUploadRoot accept={["image/png"]}>
                    <FileUploadTrigger asChild>
                        <Button variant="outline" size="sm">
                            <HiUpload /> Upload file
                        </Button>
                    </FileUploadTrigger>
                    <FileUploadList />
                </FileUploadRoot>
            </Box>
        </Flex>
    )
}

export default UploadedImages;