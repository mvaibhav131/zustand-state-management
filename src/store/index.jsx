
import { create } from "zustand";


export const AppStore = create((set) => ({
    theme:'light',
    updateTheme: data => set(state => ({ theme: data })),
}));

