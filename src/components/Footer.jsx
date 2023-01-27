import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { TiSocialGithubCircular, TiSocialInstagramCircular, TiSocialLinkedinCircular } from 'react-icons/ti'
const Footer = () => {
    return (
        <Box padding={"4"} minH='10vh' bg='blackAlpha.900'>
            <Stack direction={['column', 'row']}>
                <VStack alignItems={['center', 'flex-start']} width='full'>
                    <Heading size={'md'} children="All Rights Reserved" color={'white'} />
                    <Heading size={'sm'} children="Copyright © 2023 Jatin Pandey " color={'#3182ce'} />
                </VStack>

                <HStack spacing={["2", "10"]} justifyContent='center' color={"white"} fontSize={"2rem"}>
                    <a href="https://www.linkedin.com/in/jatin-pandey-18194b1a0/" rel="noreferrer" target={'_blank'}>
                        <TiSocialLinkedinCircular />
                    </a>
                    <a href="https://www.instagram.com/__jatin__xxvi/" rel="noreferrer" target={'_blank'}>
                        <TiSocialInstagramCircular />
                    </a>
                    <a href="https://github.com/JatinPandey26" rel="noreferrer" target={'_blank'}>
                        <TiSocialGithubCircular />
                    </a>
                </HStack>
            </Stack>
        </Box>
    )
}

export default Footer;