import { config } from "@gluestack-ui/config";
import {
  Box,
  Button,
  ButtonText,
  Center,
  GluestackUIProvider,
  Modal,
  ModalBackdrop,
  ModalContent,
  Text,
} from "@gluestack-ui/themed";

import { Menu, MenuItem, MenuItemLabel } from "./Menu";
import { Key, useState } from "react";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
    </GluestackUIProvider>
  );
}

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Center flex={1}>
      <MenuWrapper />
      <Button onPress={() => setIsOpen(!isOpen)}>
        <ButtonText>Open</ButtonText>
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalBackdrop />
        <ModalContent>
          <Text>Hello World</Text>
        </ModalContent>
      </Modal>
    </Center>
  );
};

const MenuWrapper = () => {
  const [selected, setSelected] = useState<Set<Key>>(new Set<Key>());

  return (
    <Menu
      selectionMode="multiple"
      selectedKeys={selected}
      onSelectionChange={(selections) => {
        console.log("🚀 ~ MenuWrapper ~ selections:", selections);
        setSelected(selections as Set<Key>);
      }}
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Actions</ButtonText>
          </Button>
        );
      }}
    >
      {[
        { label: "first option", value: "first" },
        { label: "second option", value: "second" },
      ].map(({ label, value }) => (
        <MenuItem key={value} textValue={value}>
          <MenuItemLabel>{label}</MenuItemLabel>
        </MenuItem>
      ))}
    </Menu>
  );
};
