import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { InputGroup } from "./components/ui/input-group"
import { LuSearch } from "react-icons/lu"

function LocationResults(){
    /* error handling */
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    // Handle the search logic
    const handleSearch = () => {
        setLoading(true);
        setError(null);

        if (!searchTerm.trim()) {
            setFilteredBirds([]);
            setLoading(false);
            return;
        }

        try {
            const results = birdsData.filter(bird => 
                bird.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (results.length === 0) {
                setError('No birds found for your search.');
            } else {
                setFilteredBirds(results);
            }
        } catch (error) {
            setError('An error occurred while searching. Please try again later.');
        } finally {
            setLoading(false);
            }
    };
    /* error handling */
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
                                placeholder = "Enter a location"
                                variant="outline"
                                bg="white"
                                htmlSize={80}
                                color="black"
                                width="auto"
                                size="lg"
                            />
                        </InputGroup>
                    </Flex>
                </Flex>
            </Box>
            <Box minH="90vh" background="cyan.700" width="100%" color="white">
                Enter location results code here
            </Box>
        </Flex>
    )
}

export default LocationResults;