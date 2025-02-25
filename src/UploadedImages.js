import React from 'react';
import { Box } from "@chakra-ui/react";
import { Flex } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { FileUploadList, FileUploadRoot, FileUploadTrigger } from './components/ui/file-upload';
import { HiUpload } from 'react-icons/hi'
import { Switch } from '@chakra-ui/react';

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
                <Flex margin="5" direction="row" justify="space-between" align="center">
                    <FileUploadRoot accept={["image/png"]}>
                        <FileUploadTrigger asChild>
                            <Button colorPalette="cyan" variant="subtle" size="lg">
                                <HiUpload /> Upload file
                            </Button>
                        </FileUploadTrigger>
                        <FileUploadList />
                    </FileUploadRoot>
                    <Switch.Root size="lg" colorPalette="gray">
                        <Switch.HiddenInput />
                            <Switch.Control>
                                <Switch.Thumb/>
                            </Switch.Control>
                        <Switch.Label textStyle="md">Delete</Switch.Label>
                    </Switch.Root>
                </Flex>
            </Box>
        </Flex>
    )
}

export default UploadedImages;