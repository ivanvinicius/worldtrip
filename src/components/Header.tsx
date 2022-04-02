import { Center, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Center w="100%" maxW="1240px" m="0 auto" p={['4', '7']}>
      <Image
        src="/images/logo.svg"
        alt="logo"
        w={['81px', '184px']}
        h={['20px', '45px']}
      />
    </Center>
  )
}
