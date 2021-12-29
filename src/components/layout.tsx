import {
  Box,
  Flex,
  Grid,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './color-mode-switcher';
import { LanguageSwitcher } from './language-switcher';
import { MenuBurger } from './menu-burger';

interface ILayoutProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const Layout = ({ children }: ILayoutProps) => {
  const defaultIsOpen = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen });

  return (
    <Flex textAlign="center" fontSize="xl" justify="center">
      <Grid minH="100vh" p={6} w="100%" maxW="1600px">
        <Flex justify="end">
          <LanguageSwitcher />
          <ColorModeSwitcher />
        </Flex>
        <Box>{children}</Box>
        <MenuBurger isOpen={isOpen} onToggle={onToggle} />
      </Grid>
    </Flex>
  );
};
