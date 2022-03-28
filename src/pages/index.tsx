import { Flex, Box, Text } from '@chakra-ui/react'

import { NextHead } from '../components/NextHead'
import { url } from '../utils/unsplashHome'

export default function Home() {
  return (
    <>
      <NextHead title="Home" />

      <Flex as="main">
        <Box
          bgImage={`url(${url})`}
          bgPosition="top"
          bgSize="cover"
          bgRepeat="no-repeat"
          bgAttachment="fixed"
          w="100%"
          h="10rem"
        >
          <Text
            fontFamily="Poppins"
            fontWeight="medium"
            color="white"
            fontSize="lg"
          >
            5 Continentes,
          </Text>
          <Text
            fontFamily="Poppins"
            fontWeight="medium"
            color="white"
            fontSize="lg"
          >
            Infinitas possibilidades.
          </Text>
          <Text
            as="span"
            fontFamily="Poppins"
            fontWeight="regular"
            color="info"
            fontSize="sm"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
      </Flex>
    </>
  )
}
