import { create } from "zustand";

const persisted = (key, init) => {
    const saved = localStorage.getItem(key);
    const state = saved ? JSON.parse(saved) : init();
    const store = create((set, get) => ({
        ...state,
        addTx: (tx) => {
            const list = [...get().tx, tx];
            set({ tx: list });
            localStorage.setItem(key, JSON.stringify({ ...get(), tx: list }));
        },
    }));
    return store;
};

export const useBudgetStore = persisted("budget-v1", {tx: []});