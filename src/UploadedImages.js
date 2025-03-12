import React from 'react';
import { useState } from "react";
import { IconButton, Image, VStack, HStack, Spacer } from "@chakra-ui/react";
import { MdFileUpload, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Flex } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { FileUploadList, FileUploadRoot, FileUploadTrigger } from './components/ui/file-upload';
import { HiUpload } from 'react-icons/hi'
import { Switch } from '@chakra-ui/react';

function UploadedImages(){
    const [images, setImages] = useState([]);
    const [deleteMode, setDeleteMode] = useState(false);
    const navigate = useNavigate();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/jpeg")) {
        const imageUrl = URL.createObjectURL(file);
        setImages([...images, imageUrl]);
        }
    };

    const handleDeleteToggle = () => {
        setDeleteMode(!deleteMode);
    };

    const handleDeleteImage = (index) => {
        if (!deleteMode) return;
        setImages(images.filter((_, i) => i !== index));
    };

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
            <VStack w="100vw" h="100vh" bg="cyan.700" align="start" spacing={4} p={4}>
                <Flex gap = "5" direction="row" justify="space-between" align="center">
                    <IconButton icon={<HiUpload />} onClick={() => document.getElementById("fileInput").click()} aria-label="Upload" />
                    <Flex gap={6}>
                        <IconButton icon={<MdDelete />} colorScheme={deleteMode ? "red" : "gray"} onClick={handleDeleteToggle} aria-label="Delete Mode" />
                    </Flex>
                    <input id="fileInput" type="file" accept="image/jpeg" hidden onChange={handleImageUpload} />
                </Flex>

                <Box w="full" p={4} overflowY="auto" flex="1">
                    <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={4} justifyContent="center">
                        {images.map((img, index) => (
                        <Image key={index} src={img} boxSize="150px" objectFit="cover" borderRadius="md" boxShadow="md" onClick={() => handleDeleteImage(index)} cursor={deleteMode ? "pointer" : "default"} />
                        ))}
                    </Box>
                </Box>
            </VStack>
        </Flex>
    )
}

export default UploadedImages;