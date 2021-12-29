import { Box, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Box textAlign="center" fontSize="xl">
      <Heading size="4xl">Michał Drabik</Heading>
      <Heading size="lg" mt={4}>
        {t('headings.title')}
      </Heading>
    </Box>
  );
};
