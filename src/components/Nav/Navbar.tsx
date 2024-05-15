"use client"

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, dropdown, extendVariants} from "@nextui-org/react";
import Image from "next/image";
import { ChevronDown, Heading1 } from "lucide-react";


// export const MyDropDown = extendVariants(Dropdown, {
//   variants:{
//     color: {
//     },
//   }
// })

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Courses",
    "Abhyas",
    "JobDekho",
    "Trace Your Growth",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <div className='fixed min-w-full z-50 min-w-screen-lg'>
    <nav className='bg-blue-900 mx-auto min-w-full z-50 min-w-screen-lg'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-10'>
            <div className='flex item-center'>
                <p className='text-white text-bold mx-10'>Welcome to SkilledUp!</p>
            </div>
            <div className='flex item-end'>
                <p className='text-white text-bold '>
                    <Link href='/' className='mx-5 text-white'>Need Help</Link>
                    <Link href='/' className='mx-5 text-white'>Contact Us</Link>
                </p>
            </div>
        </div>
    </div>
</nav>
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <h1 className="text-4xl font-bold text-black">skilled<span className="text-blue-900">Up </span></h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 text-blue-500" justify="start">

      <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className=" bg-transparent data-[hover=true]:bg-transparent hover:bg-blue-200 rounded-lg p-2"
               // endContent={Heading1}
                radius="sm"
                variant="light"
              >
                Courses
                <ChevronDown />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="p-2 w-[340px] bg-white text-black rounded-lg shadow-xl"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              // description="ACME scales apps to meet user demand, automagically, based on load."
             // startContent={icons.scale}
             href="\courses\ds"
             className="  hover:bg-blue-100 hover:text-black p-2 rounded-lg"
            >
             Data Science
            </DropdownItem>
            <DropdownItem
              key="web-dev"
              // description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              href="/courses/web"
              className="hover:bg-blue-100 hover:text-black p-2 rounded-lg"
              //startContent={icons.activity}
            >
              Web Development
            </DropdownItem>
            <DropdownItem
              key="ml"
              // description="Machine Learning"
              className="hover:bg-blue-100 hover:text-black p-2 rounded-lg"
              href="/courses/ml"
              //startContent={icons.flash}
            >
              Machine Learinig
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              // description="Applications stay on the grid with high availability and high uptime guarantees."
              className="hover:bg-blue-100 hover:text-black p-2 rounded-lg"
              href="/courses/mobile"
              //startContent={icons.server}
            >
              Mobile App Development
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              // description="Overcome any challenge with a supporting team ready to respond."
              className="hover:bg-blue-100 hover:text-black p-2 rounded-lg"
                href="/courses/blockchain"
              //startContent={icons.user}
            >
              Blockchain
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>


        <NavbarItem className="text-black hover:bg-blue-200 hover:text-black font-bold rounded-lg px-3 py-2">
          <Link color="success" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive className="text-black hover:bg-blue-200 hover:text-black font-bold rounded-lg px-3 py-2">
          <Link href="/courses" aria-current="page">
           Internship
          </Link>
        </NavbarItem>
        <NavbarItem className="text-black hover:bg-blue-200 hover:text-black font-bold rounded-lg px-3 py-2">
          <Link color="foreground" href="/jobdekho">
            Job Portal
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className=" bg-transparent data-[hover=true]:bg-transparent rounded-lg text-black hover:bg-blue-200 hover:text-black font-bold px-3 py-2"
               // endContent={Heading1}
                radius="sm"
                variant="light"
              >
                More
                <ChevronDown />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="p-2 w-[200px] bg-white text-black rounded-lg shadow-xl"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              // description="ACME scales apps to meet user demand, automagically, based on load."
             // startContent={icons.scale}
             href="/about"
             className="  hover:bg-blue-100 hover:text-black p-2 rounded-lg"
            >
            About Us
            </DropdownItem>
            <DropdownItem
              key="web-dev"
              // description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              href="/contact"
              className="hover:bg-blue-100 hover:text-black p-2 rounded-lg"
              //startContent={icons.activity}
            >
             Contact Us
            </DropdownItem>

            <DropdownItem
              key="99_uptime"
              // description="Applications stay on the grid with high availability and high uptime guarantees."
              className="hover:bg-blue-100 hover:text-black p-2 rounded-lg"
              href="/faq"
              //startContent={icons.server}
            >
              FAQ's
            </DropdownItem>
            <DropdownItem
              key="ml"
              // description="Machine Learning"
              className="hover:bg-blue-100 hover:text-black p-2 rounded-lg"
              href="/t&c"
              //startContent={icons.flash}
            >
              Terms & Conditions
            </DropdownItem>
           
           
            <DropdownItem
              key="supreme_support"
              // description="Overcome any challenge with a supporting team ready to respond."
              className="hover:bg-blue-100 hover:text-black p-2 rounded-lg"
                href="/privacy"
              //startContent={icons.user}
            >
              Privacy & Policy
            </DropdownItem>
            <DropdownItem
              key="#"
              // description="Applications stay on the grid with high availability and high uptime guarantees."
              className="hover:bg-blue-100 hover:text-black p-2 rounded-lg"
              href="/certificate"
              //startContent={icons.server}
            >
              Certificate
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
       
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem>
          <Button as={Link} color="primary" href="/auth" variant="solid" className="bg-blue-900 border text-white font-bold rounded-lg py-2 px-3">
            Sign Up/Login
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </div>
  );
}
