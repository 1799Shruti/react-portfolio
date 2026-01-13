// App Constants
export const APP_NAME = "MyApp";
export const APP_VERSION = "1.0.0";

// API Constants
export const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";
export const API_TIMEOUT = 30000;

// Route Paths
export const ROUTES = {
  HOME: "/",
  STUDENTS: "/students",
  CLOCK: "/clock",
  MATERIALS: "/materials",
} as const;
