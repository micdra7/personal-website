import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './components/language-switcher';

export const App = () => {
  const { t } = useTranslation();

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Flex justify="end">
            <LanguageSwitcher />
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer">
              Learn Chakra
            </Link>
            <Button>{t('buttons.test')}</Button>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
