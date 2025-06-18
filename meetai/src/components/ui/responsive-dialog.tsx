"use client";
import { useIsMobile } from "@/hooks/use-mobile";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogHeader,
    DialogDescription,
} from "@/components/ui/dialog";

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
} from "@/components/ui/drawer";
import { openPeeps } from "@dicebear/collection";


interface ResponsiveDialogProp {
    title: string;
    description: string;
    children: React.ReactNode;
    open: boolean;
    onOpenChange: (open : boolean) => void;
}

export const ResponsiveDialog = ({
    title,
    description,
    children,
    open,
    onOpenChange,
} : ResponsiveDialogProp) => {
    const isMobile = useIsMobile();

    if(isMobile){
        return(
            <Drawer open={open} onOpenChange={onOpenChange}>
                <DrawerContent>
                    <DialogHeader>
                        <DrawerTitle>{title}</DrawerTitle>
                        <DrawerDescription>{description}</DrawerDescription>
                    </DialogHeader>
                    <div className="p-4">

                    </div>
                </DrawerContent>
            </Drawer>
        );
    }
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
}
