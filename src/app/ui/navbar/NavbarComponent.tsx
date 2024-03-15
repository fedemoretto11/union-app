'use client'

import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import DropdownMenuComponent from "./DropdownMenuComponent";
import { MENU_ITEMS } from "@/app/const/menu";
import Image from "next/image";
import UserComponent from "./UserComponent";
import { BurguerMenuIcon } from "../varios";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar 
      className="bg-red-800 h-24"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      


      <NavbarContent className="md:hidden">
        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
          icon={<BurguerMenuIcon />}
        /> 
      </NavbarContent>





      <NavbarBrand>
        <Image 
          src="/escudo-sinFondo.webp"
          height={75}
          width={75}
          alt="Escudo del Club Social y Deportivo Union"
          priority={true}
          className="-translate-x-10 md:translate-x-0"
        />
      </NavbarBrand>
      {/* Desktop */}
      <NavbarContent className="hidden md:flex xs:gap-1 sm:gap-4">
        {
          MENU_ITEMS.map((item, index) => (
            (item.subitem)
            ?
            <NavbarMenuItem key={`${item}-${index}`}>
              <DropdownMenuComponent 
                label={item.name}
                categories={item.subitem}
              /> 
            </NavbarMenuItem>
            :
            <NavbarItem key={index}>
              <Link 
                href={item.href} 
                className="text-red-50 font-bold" 
              >
                {item.name.toUpperCase()}
              </Link>
            </NavbarItem>
          ))
        }
        <UserComponent />
      </NavbarContent>


        {/* Mobile */}
      <NavbarMenu
        className="bg-red-800 pt-24 items-center"
      >

        {MENU_ITEMS.map((item, index) => (
          (item.subitem)
          ?
          <NavbarMenuItem key={`${item}-${index}`} className="p-0">
            <DropdownMenuComponent 
              label={item.name}
              categories={item.subitem}
            /> 
          </NavbarMenuItem>
          :
          <NavbarMenuItem key={`${item}-${index}`}>
            
            <Link
              className="w-full text-red-50 text-medium font-bold"
              href={item.href}
              size="lg"
            >
              {item.name.toUpperCase()}
            </Link>
          </NavbarMenuItem>
        ))}
        <UserComponent />

      </NavbarMenu>

    </Navbar>
  )   
}