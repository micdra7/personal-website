import { Box, Flex, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './color-mode-switcher';
import { LanguageSwitcher } from './language-switcher';

interface ILayoutProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const Layout = ({ children }: ILayoutProps) => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={6}>
      <Flex justify="end">
        <LanguageSwitcher />
        <ColorModeSwitcher />
      </Flex>
      <Box>{children}</Box>
    </Grid>
  </Box>
);
