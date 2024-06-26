// import create from zustand
import { create } from "zustand";

// created the AppStore for updateTheme
export const AppStore = create((set) => ({
    theme:'light',
    updateTheme: data => set(state => ({ theme: data })),
}));

