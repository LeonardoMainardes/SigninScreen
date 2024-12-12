import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { CustomSidebar } from "@/components/CustomSidebar";
import { ResizablePanelGroup, ResizablePanel } from "@/components/ui/resizable";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Mail, Bell } from "lucide-react";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Layout() {

  const [open, setOpen] = useState(false)
 
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <SidebarProvider>
        <CustomSidebar />
        <main>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel>
              <div className="flex items-center justify-center">
                <SidebarTrigger className="p-5 mb-2" />
                <div className="flex gap-2">
                <Input placeholder="Checher..." type="search"/>
                  <DropdownMenu>
                    <Button><Mail/></Button>
                  </DropdownMenu>
                  <DropdownMenu>
                    <Button><Bell/></Button>
                  </DropdownMenu>
                </div>
              </div>
              <div className="mt-10 px-6">
                <Outlet />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </main>
      </SidebarProvider>
    </>
  );
}
