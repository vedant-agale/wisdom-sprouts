// src/projectList.js

// Import your existing images
import abImage from './assets/apnabazaar.png'; 
import weatherImg from './assets/weather-pro.png';
 import footballImg from './assets/football.png';
 import bakeryImg from './assets/poona-bakery.png';
 import spotifyImg from './assets/spotify.png';
 import tributeImg from './assets/asha-tribute.png';
 import otpImg from './assets/otp-3d.png';

export const projects = [
    {
        id: 1,
        title: "ApnaBazaar: E-Commerce",
        category: "Java Full Stack",
        description: "A full-scale e-commerce platform built using Java Spring Boot, React, and MySQL. Implemented REST APIs and secure authentication.",
        link: "https://github.com/vedant-agale/ApnaBazzar-Ecommerce",
        image: abImage
    },
    {
        id: 2,
        title: "Football Academy Website",
        category: "Frontend UI/UX",
        description: "A fully responsive, highly interactive website designed for a football academy. Features structured layouts, event sections, and modern CSS styling.",
        link: "https://github.com/vedant-agale/wisdom-sprouts/tree/main/Football-Academy-Website",
        image: footballImg
    },
    {
        id: 3,
        title: "New Poona Bakery Clone",
        category: "Web Development",
        description: "A pixel-perfect frontend clone of a commercial bakery website. Demonstrates strong command over grid systems, flexbox, and responsive design components.",
        link: "https://github.com/vedant-agale/wisdom-sprouts/tree/main/New-Poona-Bakery-Clone",
        image: bakeryImg
    },
    {
        id: 4,
        title: "Spotify Clone",
        category: "React & Audio API",
        description: "A music streaming web application replicating Spotify's core UI. Features audio playback controls, playlist rendering, and state management.",
        link: "https://github.com/vedant-agale/wisdom-sprouts/tree/main/Spotify-Clone",
        image: spotifyImg
    },
    {
        id: 5,
        title: "Asha Bhosle Tribute",
        category: "Frontend Architecture",
        description: "Demonstrating modular component architecture and Bootstrap integration to create a visually appealing and structured tribute page.",
        link: "https://github.com/vedant-agale/wisdom-sprouts/tree/main/React-Projects/tribute-page",
        image: tributeImg
    },
    {
        id: 6,
        title: "3D OTP Verification System",
        category: "Advanced JavaScript & UI",
        description: "Interactive 3D OTP input interface with advanced DOM manipulation, event handling, and strict data validation for a highly engaging user experience.",
        link: "https://github.com/vedant-agale/wisdom-sprouts/tree/main/OTP-Verification",
        image: otpImg
    },
    {
        id: 7,
        title: "Weather Pro Dashboard",
        category: "MERN Stack / API",
        description: "Advanced weather engine using OpenWeather API. Features Glassmorphism UI, dynamic backgrounds, and responsive Bootstrap logic.",
        link: "https://github.com/vedant-agale/wisdom-sprouts/tree/main/Weather-App",
        image: weatherImg
    }
];