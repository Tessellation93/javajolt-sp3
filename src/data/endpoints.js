export const endpointGroups = [
  {
    group: 'Auth',
    endpoints: [
      { method: 'POST', path: '/api/auth/register', desc: 'Register a new user', auth: false },
      { method: 'POST', path: '/api/auth/login', desc: 'Log in and receive a JWT', auth: false },
    ],
  },
  {
    group: 'Users',
    endpoints: [
      { method: 'GET', path: '/api/users', desc: 'List all users', auth: true },
      { method: 'POST', path: '/api/users', desc: 'Create a user', auth: true },
      { method: 'GET', path: '/api/users/{id}', desc: 'Get one user', auth: true },
      { method: 'PUT', path: '/api/users/{id}', desc: 'Update a user', auth: true },
      { method: 'DELETE', path: '/api/users/{id}', desc: 'Delete a user', auth: true },
      { method: 'GET', path: '/api/users/{userId}/progress', desc: "Get a user's progress", auth: true },
    ],
  },
  {
    group: 'Courses',
    endpoints: [
      { method: 'GET', path: '/api/courses', desc: 'List all courses', auth: true },
      { method: 'POST', path: '/api/courses', desc: 'Create a course', auth: true },
      { method: 'GET', path: '/api/courses/{id}', desc: 'Get one course', auth: true },
      { method: 'PUT', path: '/api/courses/{id}', desc: 'Update a course', auth: true },
      { method: 'DELETE', path: '/api/courses/{id}', desc: 'Delete a course', auth: true },
      { method: 'GET', path: '/api/courses/{courseId}/lessons', desc: 'List lessons in a course', auth: true },
      { method: 'POST', path: '/api/courses/{courseId}/lessons', desc: 'Add a lesson to a course', auth: true },
    ],
  },
  {
    group: 'Lessons',
    endpoints: [
      { method: 'GET', path: '/api/lessons/{id}', desc: 'Get one lesson', auth: true },
      { method: 'PUT', path: '/api/lessons/{id}', desc: 'Update a lesson', auth: true },
      { method: 'DELETE', path: '/api/lessons/{id}', desc: 'Delete a lesson', auth: true },
      { method: 'GET', path: '/api/lessons/{lessonId}/exercises', desc: 'List exercises in a lesson', auth: true },
      { method: 'POST', path: '/api/lessons/{lessonId}/exercises', desc: 'Add an exercise to a lesson', auth: true },
    ],
  },
  {
    group: 'Exercises',
    endpoints: [
      { method: 'GET', path: '/api/exercises/{id}', desc: 'Get one exercise', auth: true },
      { method: 'PUT', path: '/api/exercises/{id}', desc: 'Update an exercise', auth: true },
      { method: 'DELETE', path: '/api/exercises/{id}', desc: 'Delete an exercise', auth: true },
    ],
  },
  {
    group: 'Progress',
    endpoints: [
      { method: 'GET', path: '/api/progress/{id}', desc: 'Get one progress record', auth: true },
      { method: 'POST', path: '/api/progress', desc: 'Create a progress record', auth: true },
      { method: 'PUT', path: '/api/progress/{id}/complete', desc: 'Mark progress as complete', auth: true },
    ],
  },
  {
    group: 'Stack Overflow',
    endpoints: [
      { method: 'GET', path: '/api/stackoverflow/questions', desc: 'Fetch related Stack Overflow questions', auth: false },
    ],
  },
]
