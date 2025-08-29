import React from 'react'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from '@/components/ui/navigation-menu' 
import Link from 'next/link'


function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

const superior: { title: string; href: string; description: string }[] = [
  {
    title: "Camiseta",
    href: "/docs/primitives/alert-dialog",
    description:
      "Prenda básica de manga corta, cómoda y versátil, ideal para uso diario casual.",
  },
    {
    title: "Camisa",
    href: "/docs/primitives/alert-dialog",
    description:
      "Prenda con botones y cuello, usada en contextos formales, casuales o de oficina.",
  },
  {
    title: "Polo",
    href: "/docs/primitives/hover-card",
    description:
      "Prenda con cuello y botones cortos, mezcla de estilo deportivo y casual.",
  },
  {
    title: "Suéter",
    href: "/docs/primitives/progress",
    description:
      "Prenda de punto abrigada, manga larga, práctica para días fríos y combinaciones.",
  },
  {
    title: "Chaqueta",
    href: "/docs/primitives/scroll-area",
    description: "Prenda superior ligera o gruesa, usada como abrigo en distintos climas y modas.",
  },
  {
    title: "Abrigo",
    href: "/docs/primitives/tabs",
    description:
      "Prenda larga y gruesa para invierno, protege del frío y completa atuendos formales.",
  },
  {
    title: "Sudadera",
    href: "/docs/primitives/tooltip",
    description:
      "Prenda deportiva de algodón, con capucha o sin ella, ideal para estilo urbano.",
  },
  {
    title: "Chaleco",
    href: "/docs/primitives/tooltip",
    description:
      "Prenda sin mangas usada encima de camisas o suéteres para dar un toque distinto.",
  },
]

const inferior: { title: string; href: string; description: string }[] = [
  {
    title: "Pantalón",
    href: "/docs/primitives/alert-dialog",
    description:
      "Prenda inferior clásica con dos perneras, usada en trabajo, ocio o eventos formales.",
  },
  {
    title: "Jeans",
    href: "/docs/primitives/alert-dialog",
    description:
      "Pantalón de mezclilla, resistente y versátil, ícono atemporal en la moda global.",
  },
    {
    title: "Shorts",
    href: "/docs/primitives/alert-dialog",
    description:
      "Prenda corta ligera, fresca y práctica, ideal para deportes o climas veraniegos.",
  },
    {
    title: "Joggers",
    href: "/docs/primitives/alert-dialog",
    description:
      "Pantalón deportivo con puños ajustados, mezcla de confort y estilo urbano actual.",
  },
    {
    title: "Pantaloneta",
    href: "/docs/primitives/alert-dialog",
    description:
      "Prenda ligera usada para deporte, natación o clima cálido, cómoda y práctica.",
  },
    {
    title: "Cargo",
    href: "/docs/primitives/alert-dialog",
    description:
      "Pantalón con múltiples bolsillos, ideal para actividades al aire libre y estilo urbano.",
  },
]

const calzado: { title: string; href: string; description: string }[] = [
  {
    title: "Zapatillas(Tenis)",
    href: "/docs/primitives/alert-dialog",
    description:
      "Calzado cómodo deportivo o casual, usado en actividades físicas o diarias.",
  },
  {
    title: "Zapatos formales",
    href: "/docs/primitives/alert-dialog",
    description:
      "Calzado elegante de cuero, usado en eventos, oficina y situaciones formales.",
  },
    {
    title: "Sandalias",
    href: "/docs/primitives/alert-dialog",
    description:
      "Calzado abierto fresco, ideal para verano, playa o climas cálidos relajados.",
  },
    {
    title: "Botas",
    href: "/docs/primitives/alert-dialog",
    description:
      "Calzado resistente que cubre tobillos o más, usado en moda, trabajo o protección.",
  },
]

const Accesorios: {title: string; href: string; description: string}[] = [
  {
    title: "Gorra",
    href: "/docs/primitives/alert-dialog",
    description:
      "Accesorio con visera, casual y práctico, usado para deportes, sol y moda urbana.",
  },
  {
    title: "Bufanda",
    href: "/docs/primitives/alert-dialog",
    description:
      "Accesorio de tela larga, enrollado al cuello, usado para abrigo o estilo adicional.",
  },
  {
    title: "Guantes",
    href: "/docs/primitives/alert-dialog",
    description:
      "Accesorio para cubrir manos, usado en climas fríos, trabajo o como complemento.",
  },
  {
    title: "Cinturón",
    href: "/docs/primitives/alert-dialog",
    description:
      "Accesorio que ajusta la cintura, usado como soporte práctico o toque estético.",
  },
  {
    title: "Gafas de sol",
    href: "/docs/primitives/alert-dialog",
    description:
      "Accesorio para proteger la vista del sol, práctico y popular en moda actual.",
  },
    {
    title: "Joyería",
    href: "/docs/primitives/alert-dialog",
    description:
      "Accesorio para proteger la vista del sol, práctico y popular en moda actual.",
  },
]

const Navbar = () => {

  
  return (
    <>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Superior</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {superior.map((prenda) => (
                <ListItem
                  key={prenda.title}
                  title={prenda.title}
                  href={prenda.href}
                >
                  {prenda.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Inferior</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {inferior.map((prenda) => (
                <ListItem
                  key={prenda.title}
                  title={prenda.title}
                  href={prenda.href}
                >
                  {prenda.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Calzado</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {calzado.map((prenda) => (
                <ListItem
                  key={prenda.title}
                  title={prenda.title}
                  href={prenda.href}
                >
                  {prenda.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Accesorios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {Accesorios.map((prenda) => (
                <ListItem
                  key={prenda.title}
                  title={prenda.title}
                  href={prenda.href}
                >
                  {prenda.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>

    </>
  )
}




export default Navbar