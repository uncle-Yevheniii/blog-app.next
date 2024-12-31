import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { ThemeButton } from './theme-button';

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />

      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>

      <SidebarFooter>
        <ThemeButton />
      </SidebarFooter>
    </Sidebar>
  );
}
