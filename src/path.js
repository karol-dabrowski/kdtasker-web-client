const devApiUrl = "http://localhost:8000";
const prodApiUrl = "";

const config = {
    apiUrl: process.env.NODE_ENV === "development" ? devApiUrl : prodApiUrl,
    auth: {
        auth: "/auth",
        login: "/login",
        register: "/register"
    },
    api: {
        api: "/api",
        task: "/task",
        create: "/create",
        edit: "/edit",
        complete: "/finish",
        delete: "/delete",
        tasks: "/tasks",
        get: "/get",
        tasksForToday: "/getTodaysTasks",
        openTasks: "/getOpenTasks",
        numberOfDays: "days"
    }
};

export default config;
