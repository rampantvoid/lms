import { Course } from './courses';

export const fetchCourses = async () => {
  try {
    const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/courses`);
    if (!res.ok || res.status !== 200) throw new Error('not ok :(');

    return (await res.json()) as Course[];
  } catch (err) {
    console.log(process.env.EXPO_PUBLIC_API_URL);
    // Not handling error as it will be a dummy api
    return [];
  }
};
