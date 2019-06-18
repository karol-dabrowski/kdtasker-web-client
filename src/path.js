const config = {
    apiUrl: process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000'
        : '',
    auth: {
        auth: '/auth',
        login: '/login'
    },
    api: {
        api: '/api',
        tasks: '/tasks',
        tasksForToday: '/getTodaysTasks'
    }
};

export default config;