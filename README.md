# React Exercise 2 - Weather App
----------

Jan Carlo L. Cabrera UPLB

## Code Description
----------
This is a React-based weather application that allows users to search for weather information by city name. The app fetches real-time weather data from the `goweather.herokuapp.com` API and displays it in a clean, material-UI styled interface. The application handles loading states, error messages, and displays weather information including temperature and forecast in a card layout.

## How to Use?
----------
1. Enter a **city name** in the text field.
2. Press `Enter` or click the `Fetch Weather` button to fetch the weather data of the city you typed.
3. Wait for the fetch to finish.
4. Weather info will be displayed below the text field.
5. Error messages will also be displayed below the text field.
    - Errors include "city not found" and "error fetching weather data"

## Key Learnings and Takeaways 🧠
----------
- The importance of controlled API calls can be highlighted here since an improper use of `useEffect()` may lead to unnecessary API calls. 
- Asynchronous operations are also important here. They can be used to fetch data while avoiding disturbing users while they browse a website.
- A significant challenge here is setting up a flexible and modular error handler. Overcoming this lead to a more modular and maintainable code if this codebase were to be scaled up to accomodate more features.
