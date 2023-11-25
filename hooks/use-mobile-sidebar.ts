import { create } from "zustand";

type MobileSidebarStore = {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
  openSidebar: () => void;
};

export const useMobileSidebar = create<MobileSidebarStore>((set) => ({
  isSidebarOpen: false,
  closeSidebar: () => set({ isSidebarOpen: false }),
  openSidebar: () => set({ isSidebarOpen: true }),
}));
