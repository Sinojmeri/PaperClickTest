import { create } from 'zustand';

type useInfoStore = {
    time: string;
    setTime: (newTime: string) => void;
    firstName: string;
    setFirstName: (name: string) => void;
    lastName: string;
    setLastName: (surname: string) => void;
    email: string;
    setEmail: (newEmail: string) => void;
    phoneNr: string;
    setPhoneNr: (nr: string) => void;
    isChecked: boolean;
    setIsChecked: (value: boolean) => void;
}

export const useInfosStore = create<useInfoStore>((set) => ({
    time: "",
    setTime: (newTime) => set({ time: newTime }),
    firstName: "",
    setFirstName: (name) => set({ firstName: name }),
    lastName: "",
    setLastName: (surname) => set({ lastName: surname }),
    email: "",
    setEmail: (newEmail) => set({ email: newEmail }),
    phoneNr: "",
    setPhoneNr: (nr) => set({ phoneNr: nr }),
    isChecked: false,
    setIsChecked: (value) => set({isChecked: value}),
}))