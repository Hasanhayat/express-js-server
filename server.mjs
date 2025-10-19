import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World");
});


// const pakistanWeather = [
//     { city: "Karachi", temperature: 35, humidity: 60, wind: "20 km/h", min: 30, max: 37, feelslike: 38 },
//     { city: "Lahore", temperature: 40, humidity: 50, wind: "15 km/h", min: 32, max: 42, feelslike: 43 },
//     { city: "Islamabad", temperature: 36, humidity: 45, wind: "10 km/h", min: 28, max: 38, feelslike: 39 },
//     { city: "Rawalpindi", temperature: 37, humidity: 48, wind: "12 km/h", min: 29, max: 39, feelslike: 40 },
//     { city: "Faisalabad", temperature: 39, humidity: 42, wind: "18 km/h", min: 31, max: 41, feelslike: 42 },
//     { city: "Multan", temperature: 41, humidity: 38, wind: "22 km/h", min: 33, max: 43, feelslike: 44 },
//     { city: "Hyderabad", temperature: 37, humidity: 55, wind: "25 km/h", min: 30, max: 39, feelslike: 40 },
//     { city: "Peshawar", temperature: 38, humidity: 40, wind: "20 km/h", min: 30, max: 40, feelslike: 41 },
//     { city: "Quetta", temperature: 30, humidity: 35, wind: "28 km/h", min: 22, max: 32, feelslike: 31 },
//     { city: "Sialkot", temperature: 38, humidity: 46, wind: "14 km/h", min: 30, max: 40, feelslike: 42 },
//     { city: "Bahawalpur", temperature: 42, humidity: 36, wind: "19 km/h", min: 34, max: 44, feelslike: 45 },
//     { city: "Sukkur", temperature: 43, humidity: 32, wind: "24 km/h", min: 35, max: 45, feelslike: 46 },
//     { city: "Mardan", temperature: 37, humidity: 44, wind: "16 km/h", min: 29, max: 39, feelslike: 40 },
//     { city: "Gujranwala", temperature: 39, humidity: 48, wind: "13 km/h", min: 31, max: 41, feelslike: 42 },
//     { city: "Abbottabad", temperature: 28, humidity: 55, wind: "12 km/h", min: 20, max: 30, feelslike: 29 }
//   ];
  


// app.get("/api/:city", (req, res) => {
//     let city = req.params.city;
//     let weatherData = pakistanWeather.find((data) => data.city.toLowerCase() === city.toLowerCase());
//     if (weatherData) {
//         res.json({
//             status: "success",
//             data: weatherData,
//             message: `Weather data for ${city}`
//         });
//     } else {
//         res.status(404).json({
//             status: "error",
//             message: `No weather data found for ${city}`
//         });
//     }
// //   res.json({
// //     message: "Hello from the API!",
// //     data: [1, 2, 3, 4, 5],
// //     status: "success",
// //     text: "text from server",
// //   });

// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
