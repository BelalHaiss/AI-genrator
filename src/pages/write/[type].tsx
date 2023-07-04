import { SectionNav } from '@/components/sectionNav/SectionNav';
import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export function SectionType() {
  const { query } = useRouter();

  return (
    <>
      <SectionNav categories={query.type} />
      <Flex wrap='wrap' p='2' layerStyle={'flexCenter'}></Flex>
    </>
  );
}
