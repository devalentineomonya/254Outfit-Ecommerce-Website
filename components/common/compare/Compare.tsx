"use client";
import * as React from "react";

import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useCompare } from "@/hooks/useCompare";

const Compare = () => {
  const { isOpen, closeCompare } = useCompare();
  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && closeCompare()}>
      <DrawerContent>Hello</DrawerContent>
    </Drawer>
  );
};

export default Compare;
