import { MenuItems } from "../lib/definitios"

export const MENU_ITEMS: MenuItems[] = [
  {
    name: "Inicio",
    key: "inicio",
    href: ""
  },
  {
    name: "noticias",
    key: "noticias",
    href: ""
  },
  {
    name: "FUTBOL",
    key: "FUTBOL",
    href: "",
    subitem: [
      {
        name: "Primera",
        key: "primera",
        href: ""
      },
      {
        name: "Reserva",
        key: "reserva",
        href: ""
      },
      {
        name: "Inferiores",
        key: "inferiores",
        href: ""
      },
      {
        name: "Futbol Femenino",
        key: "futbol femenino",
        href: ""
      }
    ]
  },
  {
    name: "OTROS DEPORTES",
    key: "OTROS DEPORTES",
    href: "",
    subitem: [
      {
        name: "Basquet Masculino",
        key: "Basquet masculino",
        href: ""
      },
      {
        name: "Basquet Femenino",
        key: "Basquet femenino",
        href: ""
      },
      {
        name: "Voley",
        key: "Voley",
        href: ""
      }
    ]
  },
  {
    name: "INSTITUCIONAL",
    key: "INSTITUCIONAL",
    href: ""
  },
  {
    name: "MEDIA",
    key: "MEDIA",
    href: ""
  }

]
