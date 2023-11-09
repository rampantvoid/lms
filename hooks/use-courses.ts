import { useContext } from 'react';
import { CourseContext } from '../providers/course-provider';

export default function useCourses() {
  return useContext(CourseContext);
}
