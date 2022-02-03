import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './color-mode-switcher';
import { LanguageSwitcher } from './language-switcher';

interface IMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuContent = () => (
  <>
    <LanguageSwitcher />
    <ColorModeSwitcher />
  </>
);

export const Menu = ({ isOpen, onClose }: IMenuProps) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  if (isMobile) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="90%">
          <ModalCloseButton top="50%" transform="translateY(-50%)" />
          <ModalBody>
            <MenuContent />
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Box>
      <MenuContent />
    </Box>
  );
};
