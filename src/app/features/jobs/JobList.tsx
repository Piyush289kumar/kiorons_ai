// // /src/features/jobs/JobList.tsx
// import { useEffect } from 'react';
// // import { fetchJobs } from '@/lib/apiClient';
// import { useJobsStore } from '@/app/store/useJobsStore';
// import { fetchJobs } from '@/app/lib/apiClient';

// export function JobList() {
//   const { jobs, setJobs, isLoading, setLoading } = useJobsStore();

//   useEffect(() => {
//     setLoading(true);
//     fetchJobs()
//       .then((data) => setJobs(data))
//       .finally(() => setLoading(false));
//   }, [setJobs, setLoading]);

//   if (isLoading) return <div>Loading...</div>;
//   return <>{jobs.map(job => <div key={job.id}>{job.title}</div>)}</>;
// }
