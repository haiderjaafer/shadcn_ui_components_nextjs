"use client"
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "قسم الصيانة",
    label: "قسم الصيانة",
  },
  {
    value: "قسم الموارد البشرية",
    label: "قسم الموارد البشرية",
   
  },
  {
    value: "قسم تقنية المعلومات",
    label: "قسم تقنية المعلومات",
  },
];

const DropDwon = () => {

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    console.log("value", value);

  return (
   <div className="flex items-center justify-center h-screen">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[500px] justify-between font-extrabold text-2xl"
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Select framework..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[500px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              <CommandList>
                {frameworks.map((framework) => (
                  <CommandItem
                  className="text-lg font-extrabold"
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                      
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4 font-extrabold",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                   <strong className="font-extrabold text-2xl"> {framework.label}</strong>
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default DropDwon
