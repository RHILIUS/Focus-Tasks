"use-client"
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "../ui/sidebar";
import { Button } from "../ui/button";

export function AppHeader() {
  return (
    <header className="flex h-14 items-center justify-between ">
      <div className="flex px-3 items-center">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">
                Tasks Today
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex mr-5 w-50 justify-between items-center">
        <Button className="px-5">Create</Button>
        <Button className="rounded-full h-12 w-12 p-0">C</Button>
      </div>
    </header>
  )
}