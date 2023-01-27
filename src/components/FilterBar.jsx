import { VStack, Input, HStack, Button, Modal, useDisclosure, ModalBody, ModalCloseButton, ModalHeader, ModalContent, ModalOverlay, Text } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import { useState } from 'react';
import { RiSearch2Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { getChartData } from '../Redux/Actions/action';

const FilterBar = () => {

    const [formData, setFormData] = useState({});

    function handleDataChange(e) {

        if (e.target.id === 'end_year') {
            setFormData({ ...formData, [e.target.id]: (Number)(e.target.value) })
            return;
        }

        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const dispatch = useDispatch();

    function handleFormSubmit(e) {
        e.preventDefault();
        dispatch(getChartData(formData))

    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Fragment>
            <Button onClick={onOpen} bgColor='purple.500' color={'white'} variant='ghost' width={'full'}> <HStack spacing={5}><RiSearch2Fill size='20' /> <Text fontSize={'18'} children='Filter' /></HStack></Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />

                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack
                            spacing={"8"}
                            p="8"
                            boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
                            alignItems="flex-start"
                        >
                            <form action="" onSubmit={handleFormSubmit}>
                                <VStack>
                                    <HStack>
                                        <label htmlFor="topic" className='labelInForm'>Topic</label>
                                        <Input id='topic' onChange={handleDataChange} />
                                    </HStack>
                                    <HStack>
                                        <label htmlFor="sector" className='labelInForm'>Sector</label>
                                        <Input id='sector' onChange={handleDataChange} />
                                    </HStack>

                                    <HStack>
                                        <label htmlFor="region" className='labelInForm'>Region</label>
                                        <Input id='region' onChange={handleDataChange} />
                                    </HStack>
                                    <HStack >
                                        <label htmlFor="source" className='labelInForm'>Source</label>
                                        <Input id='source' onChange={handleDataChange} />
                                    </HStack>
                                    <HStack >
                                        <label htmlFor="pestle" className='labelInForm'>PEST</label>
                                        <Input id='pestle' onChange={handleDataChange} />
                                    </HStack>
                                    <HStack >
                                        <label htmlFor="country" className='labelInForm'>Country</label>
                                        <Input id='country' onChange={handleDataChange} />
                                    </HStack>
                                    <HStack >
                                        <label htmlFor="end_year" className='labelInForm'>End year</label>
                                        <Input id='end_year' onChange={handleDataChange} type='number' />
                                    </HStack>
                                    <Button w={'full'} color='white' bg={'blue.400'} type='submit' onClick={onClose}>Filter</Button>
                                </VStack >
                            </form >
                        </VStack >
                    </ModalBody >

                </ModalContent >

            </Modal >
        </Fragment >
    )
}

export default FilterBar