"use client";

import { ChevronsDownUpIcon, Check } from "lucide-react";
import { Category } from "@/sanity.types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

interface CategorySelectorProps {
  categories: Category[];
  selectedCategorySlug?: string;
}

function CategorySelectorComponent({
  categories,
  selectedCategorySlug,
}: CategorySelectorProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(() => {
    const selectedCategory = categories.find(
      (category) => category.slug?.current === selectedCategorySlug
    );
    return selectedCategory?._id || "";
  });
  const router = useRouter();

  const handleCategorySelect = (categoryId: string, slug?: string) => {
    setValue(categoryId);
    setOpen(false);
    if (slug) {
      router.push(`/categories/${slug}`);
    }
  };

  const selectedCategory = categories.find(
    (category) => category._id === value
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full max-w-full flex justify-between items-center space-x-2 bg-blue-500 hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-4 rounded"
        >
          <span className="truncate">
            {selectedCategory?.title || "Filter By Category"}
          </span>
          <ChevronsDownUpIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." className="h-9" />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category._id}
                  value={category.title}
                  onSelect={() =>
                    handleCategorySelect(category._id, category.slug?.current)
                  }
                >
                  {category.title}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === category._id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default CategorySelectorComponent;
