import { Icon, IconButton } from '@chakra-ui/react';
import { FaArrowRight, FaBars } from 'react-icons/fa';

interface IMenuBurgerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MenuBurger = ({ isOpen, onToggle }: IMenuBurgerProps) => (
  <IconButton
    display={['flex', null, null, 'none']}
    justifyContent="center"
    justifyItems="center"
    alignItems="center"
    pos="fixed"
    top="6"
    right="6"
    size="lg"
    aria-label="toggle menu"
    variant="ghost"
    onClick={onToggle}
    icon={<Icon boxSize="1.5em" as={isOpen ? FaArrowRight : FaBars} />}
  />
);
