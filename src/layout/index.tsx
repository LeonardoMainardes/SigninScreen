import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { CustomSidebar } from "@/components/CustomSidebar";
import { Input } from "@/components/ui/input";
import { Mail, Bell, Sun } from "lucide-react";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import ninja from "../assets/ninja.jpg";
import { Separator } from "@/components/ui/separator";

export default function Layout() {
  return (
    <>
      <SidebarProvider>
        <CustomSidebar />
        <main className="w-full h-screen">
          <div className="flex items-center py-1">
              <SidebarTrigger className="m-3" />
              <Input placeholder="Checher..." type="search" className="w-96 border border-zinc-150" />
            <div className="flex items-center ml-auto space-x-2 pr-4">
              <DropdownMenu>
                <Button className="bg-transparent">
                  <Mail color="#000000"/>
                </Button>
              </DropdownMenu>
              <DropdownMenu>
                <Button className="bg-transparent" >
                  <Bell color="#000000"/>
                </Button>
              </DropdownMenu>
              <Button className="bg-transparent" >
                <Sun color="#000000"/>
              </Button>
              <DropdownMenu>
              <Avatar>
                <AvatarImage src={ninja} />
              </Avatar>
              </DropdownMenu>
            </div>
          </div>
          <Separator />
          <div className="mt-1 mb-16 w-full p-4">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}
