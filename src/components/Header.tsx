import Link from 'next/link'
import { Flex, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex
      as="header"
      p="5"
      align="center"
      justify="center"
      borderBottom="1px"
      borderBottomColor="border"
    >
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="logo"
          objectFit="cover"
          w="5rem"
          h="1.25rem"
          transition={'filter 0.3s'}
          _hover={{ filter: 'brightness(0.8)' }}
        />
      </Link>
    </Flex>
  )
}
