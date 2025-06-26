// Course data with scheduling and availability information
export const coursesData = [
  {
    id: 'CS101',
    code: 'CS 101',
    name: 'Introduction to Programming',
    category: 'Computer Science',
    instructor: 'Dr. Smith',
    credits: 3,
    schedule: 'Mon, Wed 10:00-11:30 AM',
    timeSlots: [
      { day: 'Monday', start: '10:00', end: '11:30' },
      { day: 'Wednesday', start: '10:00', end: '11:30' }
    ],
    enrolled: 28,
    capacity: 30,
    prerequisites: []
  },
  {
    id: 'MATH201',
    code: 'MATH 201',
    name: 'Calculus II',
    category: 'Mathematics',
    instructor: 'Prof. Johnson',
    credits: 4,
    schedule: 'Tue, Thu 2:00-3:30 PM',
    timeSlots: [
      { day: 'Tuesday', start: '14:00', end: '15:30' },
      { day: 'Thursday', start: '14:00', end: '15:30' }
    ],
    enrolled: 25,
    capacity: 25,
    prerequisites: ['MATH 101']
  },
  {
    id: 'PHYS151',
    code: 'PHYS 151',
    name: 'General Physics I',
    category: 'Physics',
    instructor: 'Dr. Williams',
    credits: 3,
    schedule: 'Mon, Wed, Fri 9:00-9:50 AM',
    timeSlots: [
      { day: 'Monday', start: '09:00', end: '09:50' },
      { day: 'Wednesday', start: '09:00', end: '09:50' },
      { day: 'Friday', start: '09:00', end: '09:50' }
    ],
    enrolled: 22,
    capacity: 25,
    prerequisites: []
  },
  {
    id: 'CS201',
    code: 'CS 201',
    name: 'Data Structures',
    category: 'Computer Science',
    instructor: 'Dr. Smith',
    credits: 3,
    schedule: 'Tue, Thu 11:00-12:30 PM',
    timeSlots: [
      { day: 'Tuesday', start: '11:00', end: '12:30' },
      { day: 'Thursday', start: '11:00', end: '12:30' }
    ],
    enrolled: 20,
    capacity: 24,
    prerequisites: ['CS 101']
  },
  {
    id: 'ENG101',
    code: 'ENG 101',
    name: 'Engineering Fundamentals',
    category: 'Engineering',
    instructor: 'Prof. Brown',
    credits: 2,
    schedule: 'Fri 1:00-3:00 PM',
    timeSlots: [
      { day: 'Friday', start: '13:00', end: '15:00' }
    ],
    enrolled: 18,
    capacity: 20,
    prerequisites: []
  },
  {
    id: 'MATH101',
    code: 'MATH 101',
    name: 'College Algebra',
    category: 'Mathematics',
    instructor: 'Prof. Johnson',
    credits: 3,
    schedule: 'Mon, Wed, Fri 11:00-11:50 AM',
    timeSlots: [
      { day: 'Monday', start: '11:00', end: '11:50' },
      { day: 'Wednesday', start: '11:00', end: '11:50' },
      { day: 'Friday', start: '11:00', end: '11:50' }
    ],
    enrolled: 30,
    capacity: 30,
    prerequisites: []
  }
];
