import { Flex, Icon, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
type Props = {
  label: string;
};

export function Write_Header({ label }: Props) {
  const { t } = useTranslation();

  return (
    <Flex p='2' bg='gray.50' w='full' gap='1' align={'center'}>
      <BackButton />
      <Text fontWeight='bold' fontSize={'xl'}>
        {t(label)}
      </Text>
    </Flex>
  );
}

function BackButton() {
  const { lang } = useTranslation();
  const icon = lang === 'en' ? IoIosArrowBack : IoIosArrowForward;
  const { back } = useRouter();
  return <Icon as={icon} h={7} w={7} cursor={'pointer'} onClick={back} />;
}
