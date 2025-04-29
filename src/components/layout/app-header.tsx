"use-client"
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "../ui/sidebar";
import { Button } from "../ui/button";

export function AppHeader() {
  return (
    <header className="flex h-12   items-center justify-between border-b">
      <div className="flex flex-1 items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1 font-bold">
                Tasks Today
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex mr-5 w-50 justify-between items-center">
        <Button className="px-4 h-8 cursor-pointer" variant="secondary" >Create</Button>
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Button className="rounded-full h-9 w-9 p-0 cursor-pointer" variant="secondary">C</Button>
      </div>
    </header>
  )
}