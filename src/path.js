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
        task: '/task',
        create: '/create',
        edit: '/edit',
        complete: '/finish',
        delete: '/delete',
        tasks: '/tasks',
        get: '/get',
        tasksForToday: '/getTodaysTasks'
    }
};

export default config;