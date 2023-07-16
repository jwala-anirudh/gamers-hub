import { HStack, Image } from '@chakra-ui/react';

// Components
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

// Assets
import logo from '../assets/logo.webp';

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
