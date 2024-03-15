'use client'

import { DropdownCategory } from "@/app/lib/definitios"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { ChevronDown } from "lucide-react"

const icons = {
  chevron: <ChevronDown />
}


export default function DropdownMenuComponent({ label, categories }: {label: string, categories: DropdownCategory[]}) {


  return (
    <Dropdown className="bg-red-50">

      <DropdownTrigger>
        <Button
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent text-red-50 text-medium font-bold"
          radius="sm"
          variant="light"
          endContent={icons.chevron}
        >
          {label.toUpperCase()}
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="ACME features"
        className="w-[340px]"
        itemClasses={{
          base: "gap-6",
        }}
      >
        {
          categories.map((cat) => {
            return (
              <DropdownItem
                key={cat.key}
                className="text-red-900 text-medium data-[hover=true]:bg-red-300 "
              >
                {cat.name.toUpperCase()}
              </DropdownItem>
            )
          })
        }
      </DropdownMenu>

    </Dropdown>
  )
}