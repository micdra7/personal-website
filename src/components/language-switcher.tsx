import { Button, ButtonGroup } from '@chakra-ui/react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { AvailableLanguagesEnum } from '../utils/enums';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <ButtonGroup size="md" isAttached variant="ghost">
      {AvailableLanguagesEnum.map(({ id, value, label }) => (
        <Button
          key={id}
          onClick={() => i18next.changeLanguage(value)}
          fontWeight={i18n.language === value ? 'extrabold' : 'normal'}>
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
};
