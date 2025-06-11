import { SidebarProvider } from "@/components/ui/sidebar";

interface Props {
    children: React.ReactNode;
}  

const Layout = ({children} : Props) => {
    return ( 
        <SidebarProvider>
            {children}
        </SidebarProvider>
     );
}
 
export default Layout;