import { config } from "@gluestack-ui/config";
import {
  Box,
  Button,
  ButtonText,
  Center,
  GluestackUIProvider,
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
  return (
    <Center flex={1}>
      <MenuWrapper />
    </Center>
  );
};

const MenuWrapper = () => {
  const [selected, setSelected] = useState<Set<Key>>(new Set<Key>());

  return (
    <Menu
      selectionMode="single"
      selectedKeys={selected}
      onSelectionChange={(selections) => {
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
