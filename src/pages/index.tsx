import {
  Flex,
  Box,
  Text,
  Grid,
  GridItem,
  Divider,
  Center
} from '@chakra-ui/react'

import { NextHead } from '../components/NextHead'
import { Slider } from '../components/Slider'
import images from '../utils/images'
import sliderContent from '../utils/sliderContent'

export default function Home() {
  return (
    <>
      <NextHead title="Home" />

      <Flex as="main" flexDir="column">
        <Box
          display="flex"
          justifyContent="center"
          flexDir="column"
          bgImage={`url(${images.home.banner})`}
          bgPosition="top"
          bgSize="cover"
          bgRepeat="no-repeat"
          bgAttachment="fixed"
          w="100%"
          h="10rem"
          px="4"
          py="7"
        >
          <Text
            fontFamily="Poppins"
            fontWeight="medium"
            color="white"
            fontSize="xl"
          >
            5 Continentes,
          </Text>
          <Text
            fontFamily="Poppins"
            fontWeight="medium"
            color="white"
            fontSize="xl"
          >
            Infinitas possibilidades.
          </Text>
          <Text
            as="span"
            mt="2"
            fontFamily="Poppins"
            fontWeight="regular"
            color="info"
            fontSize="sm"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Box px="12" py="9">
          <Grid
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap="4"
          >
            <GridItem>
              <Box display="flex" alignItems="center">
                <Box w="2" h="2" bgColor="heading" borderRadius="full" mr="2" />
                <Text
                  color="text"
                  fontSize="lg"
                  fontWeight="medium"
                  fontFamily="Poppins"
                >
                  vida noturna
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box display="flex" alignItems="center">
                <Box w="2" h="2" bgColor="heading" borderRadius="full" mr="2" />
                <Text
                  color="text"
                  fontSize="lg"
                  fontWeight="medium"
                  fontFamily="Poppins"
                >
                  praia
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box display="flex" alignItems="center">
                <Box w="2" h="2" bgColor="heading" borderRadius="full" mr="2" />
                <Text
                  color="text"
                  fontSize="lg"
                  fontWeight="medium"
                  fontFamily="Poppins"
                >
                  moderno
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box display="flex" alignItems="center">
                <Box w="2" h="2" bgColor="heading" borderRadius="full" mr="2" />
                <Text
                  color="text"
                  fontSize="lg"
                  fontWeight="medium"
                  fontFamily="Poppins"
                >
                  clássico
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box display="flex" alignItems="center">
                <Box w="2" h="2" bgColor="heading" borderRadius="full" mr="2" />
                <Text
                  color="text"
                  fontSize="lg"
                  fontWeight="medium"
                  fontFamily="Poppins"
                >
                  e mais...
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>

        <Center>
          <Divider h="1px" w="60px" />
        </Center>

        <Center flexDirection="column" mt="6">
          <Text
            fontSize="xl"
            color="text"
            fontWeight="medium"
            fontFamily="Poppins"
          >
            Vamos nessa?
          </Text>
          <Text
            fontSize="xl"
            color="text"
            fontWeight="medium"
            fontFamily="Poppins"
          >
            Então escolha seu continente
          </Text>
        </Center>

        <Center mt="2.25rem" w="100%" h="15.5rem">
          <Slider content={sliderContent} />
        </Center>
      </Flex>
    </>
  )
}
