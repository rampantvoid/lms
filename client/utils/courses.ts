const courseModel = {
  id: 1, // Unique identifier for the course
  name: 'Introduction to React Native',
  instructor: 'John Doe', // Name of the course instructor
  description:
    'Learn the basics of React Native development and build your first mobile app.',
  enrollmentStatus: 'Open',
  thumbnail:
    'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/3a/9d2a7af297483a845340bcfbac6f1e/MLS.course-banners-01_Course-Logo-.png?auto=format%2Ccompress%2C%20enhance&dpr=3&w=265&h=216&fit=crop&q=50', //Link to the course thumbnail
  duration: '8 weeks', // Duration of the course
  schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
  location: 'Online',
  prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
  difficulty: 'Intermediate',

  syllabus: [
    {
      week: 1,
      topic: 'Introduction to React Native',
      content:
        'Overview of React Native, setting up your development environment.',
    },
    {
      week: 2,
      topic: 'Building Your First App',
      content: 'Creating a simple mobile app using React Native components.',
    },
    // Additional weeks and topics...
    {
      week: 3,
      topic: 'Building Your First App',
      content: 'Creating a simple mobile app using React Native components.',
    },
    // Additional weeks and topics...
  ],
  students: [
    {
      id: 101,
      name: 'Alice Johnson',
      email: 'alice@example.com',
    },
    {
      id: 102,
      name: 'Bob Smith',
      email: 'bob@example.com',
    },
    // Additional enrolled students...
  ],
};

export const courses = [courseModel, courseModel, courseModel];

export type Course = typeof courseModel;
