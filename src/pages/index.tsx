import {
  Flex,
  Box,
  Text,
  useBreakpointValue,
  Image,
  Grid,
  GridItem,
  Divider,
  Center
} from '@chakra-ui/react'

import { NextHead } from '../components/NextHead'
import { Slider } from '../components/Slider'
import images from '../utils/images'

export default function Home() {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true
  })

  return (
    <>
      <NextHead title="Home" />

      <Flex id="container" as="main" flexDir="column">
        <Flex
          id="banner"
          w="100%"
          px={['4', '35']}
          py={['7', '20']}
          backgroundImage={images.home.banner}
          bgPosition="top"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgAttachment="fixed"
        >
          <Flex w="100%" maxW="1240px" m="0 auto" position="relative">
            <Box w="100%" maxW="530px">
              <Text
                fontFamily="Poppins"
                fontWeight="medium"
                fontSize={['xl', '4xl']}
                color="white"
              >
                5 Continentes,
              </Text>
              <Text
                fontFamily="Poppins"
                fontWeight="medium"
                fontSize={['xl', '4xl']}
                color="white"
              >
                infinitas possibilidades.
              </Text>
              <Text
                fontFamily="Poppins"
                fontWeight="regular"
                fontSize={['sm', 'xl']}
                color="info"
                mt={['2', '5']}
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Box>

            {isLargeScreen && (
              <Box position="absolute" top="0" right="0">
                <Image src="/images/airplane.svg" alt="airplane" />
              </Box>
            )}
          </Flex>
        </Flex>

        <Flex
          id="trip-grid"
          w="100%"
          maxW="1240px"
          mx="auto"
          mt={['9', '28']}
          px={['4', '35']}
        >
          {isLargeScreen ? (
            <Grid w="100%" templateColumns={'repeat(5, 1fr)'} gap={4}>
              <GridItem
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDir="column"
              >
                <Image
                  src="/images/cocktail.svg"
                  alt="cocktail"
                  w="85px"
                  h="85px"
                />
                <Text
                  mt="6"
                  fontFamily="Poppins"
                  fontWeight={'medium'}
                  fontSize="2xl"
                  color="text"
                >
                  vida noturna
                </Text>
              </GridItem>
              <GridItem
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDir="column"
              >
                <Image src="/images/surf.svg" alt="surf" w="85px" h="85px" />
                <Text
                  mt="6"
                  fontFamily="Poppins"
                  fontWeight={'medium'}
                  fontSize="2xl"
                  color="text"
                >
                  praia
                </Text>
              </GridItem>
              <GridItem
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDir="column"
              >
                <Image
                  src="/images/building.svg"
                  alt="building"
                  w="85px"
                  h="85px"
                />
                <Text
                  mt="6"
                  fontFamily="Poppins"
                  fontWeight={'medium'}
                  fontSize="2xl"
                  color="text"
                >
                  moderno
                </Text>
              </GridItem>
              <GridItem
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDir="column"
              >
                <Image
                  src="/images/museum.svg"
                  alt="museum"
                  w="85px"
                  h="85px"
                />
                <Text
                  mt="6"
                  fontFamily="Poppins"
                  fontWeight={'medium'}
                  fontSize="2xl"
                  color="text"
                >
                  clássico
                </Text>
              </GridItem>
              <GridItem
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDir="column"
              >
                <Image src="/images/earth.svg" alt="earth" w="85px" h="85px" />
                <Text
                  mt="6"
                  fontFamily="Poppins"
                  fontWeight={'medium'}
                  fontSize="2xl"
                  color="text"
                >
                  mais...
                </Text>
              </GridItem>
            </Grid>
          ) : (
            <Grid
              w="100%"
              templateRows="repeat(3, 1fr)"
              templateColumns="repeat(2, 1fr)"
              gap="4"
            >
              <GridItem>
                <Box display="flex" alignItems="center">
                  <Box
                    w="2"
                    h="2"
                    bgColor="heading"
                    borderRadius="full"
                    mr="2"
                  />
                  <Text
                    color="text"
                    fontSize={['lg', '2xl']}
                    fontWeight="medium"
                    fontFamily="Poppins"
                  >
                    vida noturna
                  </Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box display="flex" alignItems="center">
                  <Box
                    w="2"
                    h="2"
                    bgColor="heading"
                    borderRadius="full"
                    mr="2"
                  />
                  <Text
                    color="text"
                    fontSize={['lg', '2xl']}
                    fontWeight="medium"
                    fontFamily="Poppins"
                  >
                    praia
                  </Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box display="flex" alignItems="center">
                  <Box
                    w="2"
                    h="2"
                    bgColor="heading"
                    borderRadius="full"
                    mr="2"
                  />
                  <Text
                    color="text"
                    fontSize={['lg', '2xl']}
                    fontWeight="medium"
                    fontFamily="Poppins"
                  >
                    moderno
                  </Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box display="flex" alignItems="center">
                  <Box
                    w="2"
                    h="2"
                    bgColor="heading"
                    borderRadius="full"
                    mr="2"
                  />
                  <Text
                    color="text"
                    fontSize={['lg', '2xl']}
                    fontWeight="medium"
                    fontFamily="Poppins"
                  >
                    clássico
                  </Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box display="flex" alignItems="center">
                  <Box
                    w="2"
                    h="2"
                    bgColor="heading"
                    borderRadius="full"
                    mr="2"
                  />
                  <Text
                    color="text"
                    fontSize={['lg', '2xl']}
                    fontWeight="medium"
                    fontFamily="Poppins"
                  >
                    e mais...
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          )}
        </Flex>
        <Divider width={['60px', '90px']} mx="auto" mt={['9', '20']} />

        <Center px={['4', '35']} mt={['6', '20']} flexDirection="column">
          <Text
            fontSize={['xl', '3xl']}
            color="text"
            fontWeight="medium"
            fontFamily="Poppins"
          >
            Vamos nessa?
          </Text>
          <Text
            mt={['0', '2']}
            fontSize={['xl', '3xl']}
            color="text"
            fontWeight="medium"
            fontFamily="Poppins"
          >
            Então escolha seu continente
          </Text>
        </Center>

        <Center
          id="slider"
          mx="auto"
          mt={['5', '20']}
          mb={['5', '7']}
          w="100%"
          maxW="1240px"
          h={['250px', '450px']}
        >
          <Slider content={images.slider} />
        </Center>
      </Flex>
    </>
  )
}
