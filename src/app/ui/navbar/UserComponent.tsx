'use client'

import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarContent } from "@nextui-org/react";
import { useState } from "react";

export default function UserComponent() {

  const [user, setUser] = useState<string | null>("fede");

  return (
    <NavbarContent as="div" justify="center" className="h-12">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              // as="button"
              className="transition-transform"
              color="danger"
              name="Jason Hughes"
              size="sm"
              src={user ? "https://i.pravatar.cc/400?img=13" : "https://as2.ftcdn.net/v2/jpg/03/32/59/65/1000_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"}
            />
          </DropdownTrigger>
          {
            user
            ?
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Federico Moretto</p>
                <p className="font-semibold">fedemoretto94@gmail.com</p>
              </DropdownItem>
              {/* <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem> */}
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
            :
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-10 gap-2">
                <p className="font-semibold">Iniciar Sesion</p>
              </DropdownItem>
              {/* <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Registrarse</p>
              </DropdownItem> */}
            </DropdownMenu>
          }
          
        </Dropdown>
      </NavbarContent>
  )
}