import { Box, Flex, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './color-mode-switcher';
import { LanguageSwitcher } from './language-switcher';

interface ILayoutProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const Layout = ({ children }: ILayoutProps) => (
  <Flex textAlign="center" fontSize="xl" justify="center">
    <Grid minH="100vh" p={6} w="100%" maxW="1600px">
      <Flex justify="end">
        <LanguageSwitcher />
        <ColorModeSwitcher />
      </Flex>
      <Box>{children}</Box>
    </Grid>
  </Flex>
);
