# WeatherDashboardApp 🌦️

## Project Description

A responsive weather application built with React (Vite + TypeScript) that allows users to search for any city worldwide and view real-time weather information.  
The app integrates with the **OpenWeather API** to display current weather conditions such as temperature, humidity, wind speed, etc.

## Steps to Run the Project

1. Clone the Repository
```bash
git clone https://github.com/<your-username>/weather-app.git
cd weather-app
```

2. Install Dependencies
```bash
npm install
# or
yarn install
```

3. Set Up Environment Variables( .env)
```bash
VITE_API_KEY=your_weather_api_key_here
```
4. Run the Project
```bash
npm run dev
# or
yarn dev
```

5. The app will be running at url : http://localhost:5173

## Technologies Used
1. React (with Vite & TypeScript)
2. TailwindCSS (for styling)
3. OpenWeather API (for current weather data fetching)
4. Geocoding API API (for location suggestions)

## Additional Features
1. Toggle between Celsius and Fahrenheit temperature unit
2. Background change based on weather condition (clear, rainy, cloudy, etc.)
3. Get location suggestions while searching for city

# Documentation
## 1. Problem Understanding
The objective was to create a weather dashboard that shows the current weather information for any city worldwide and is responsive (for both desktop and mobile screens) and provides accurate real-time weather data.

## 2. Planning
1. Searched for UI design inspirations in the Internet.
2. Broke the UI into reusable components: Header, Weather, Error, Loading, LocationSuggestions, etc.
3. Decided to use Custom Hooks for data fetching and clean code architecture
4. Context API to manage global state (city , units, weather data, etc).
5. TailwindCSS chosen for fast, responsive styling.
6. Typescript for TypeSafety.

## 3. Implementation
1. Integrated OpenWeather API using fetch with TypeScript interfaces.
2. Used conditional rendering for loaders, errors, and type safety.
3. Implemented temperature unit toggle (Celsius/Fahrenheit).
4. Added dynamic background videos based on weather conditions(like clear, rain, snow etc).
5. Secured API key via .env file.

## 4. Key Decisions
1. Vite + TypeScript for fast builds + type safety.
2. TailwindCSS for fast styling.
3. Context API to avoid prop-drilling and  global state management.
4. Custom Hooks for data fetching and state management(loading,error, etc.).
5. Debouncing to prevent excessive API calls while typing.
6. Optimizations such as memoization to avoid unnecessary re-renders in the app for better performance.
7. Error & Loader components for a better user experience.

# Demo
Here is the live demo link of the app: https://weather-dashboard-app-kohl.vercel.app
