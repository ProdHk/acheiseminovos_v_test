import menuItems from "@/statics/menus/default";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function HeaderDefault() {

    return (
        <div className="w-full h-20 flex flex-row rounded-b-md bg-orange-600
        items-center gap-5 px-3 justify-between
        ">
            {/* LOGO */}
            <div className="w-20 h-5/6 bg-white rounded-md" />



            <Breadcrumb className="w-6/12 p-3 ">
                <BreadcrumbList className="flex flex-row justify-evenly">

                    {menuItems?.map(({ id, name, path, icon }: any) =>

                        <BreadcrumbItem key={id} className="text-white text-base">
                            <BreadcrumbLink href={path} className=" flex flex-row gap-2 items-center text-center justify-center">

                                {icon ? icon : ''}

                                {name ? <p>{name}</p> : ''}
                            </BreadcrumbLink>
                        </BreadcrumbItem>


                    )}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}