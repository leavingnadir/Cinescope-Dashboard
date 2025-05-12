import AdminSidebar from "@/components/admin-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AdminLayout() {
  return (
    <SidebarProvider>
      <AdminSidebar />
    </SidebarProvider>
  );
}
