// /src/store/useJobsStore.ts
import { create } from 'zustand';

export const useJobsStore = create((set) => ({
  jobs: [],
  isLoading: false,
  setJobs: (jobs) => set({ jobs }),
  setLoading: (isLoading) => set({ isLoading }),
}));