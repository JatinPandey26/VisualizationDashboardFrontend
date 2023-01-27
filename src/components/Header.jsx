import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { ColorModeSwitcher } from './colorModeSwitch'
const Header = () => {
    return (
        <Box>
            <Heading children = 'Visualization Dashboard' p={'1rem'} backgroundColor='blue.400' color={'white'} mb = {10}/>
            <ColorModeSwitcher/>
        </Box>
    )
}

export default Header;