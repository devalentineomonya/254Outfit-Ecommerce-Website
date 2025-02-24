"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
        className
      )}
      {...props}
    >
      {children}
      <svg
        className="size-4 shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          className="origin-center transition-transform duration-200 group-data-[state=open]:-rotate-90"
          strokeLinecap="round"
          d="M12 4v16"
        />
        <path
          className="origin-center transition-opacity duration-200 group-data-[state=open]:opacity-0"
          strokeLinecap="round"
          d="M4 12h16"
        />
      </svg>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} {...props} asChild>
    <motion.div
      initial={{
        height: 0,
        opacity: 0,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      animate={{
        height: "auto",
        opacity: 1,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      exit={{
        height: 0,
        opacity: 0,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      className={cn("overflow-hidden text-sm", className)}
    >
      <AnimatePresence>
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
      </AnimatePresence>
    </motion.div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
