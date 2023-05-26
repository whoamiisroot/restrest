import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const containerStyle = {
    width: "400px",
    height: "400px"
  };

  const center = {
    lat: 0.0,
    lng: 0.0
  };

  const zoom = 80;

  const [selectedRestaurantLocation, setSelectedRestaurantLocation] = useState({
    lat: 0.0,
    lng: 0.0
  });

  useEffect(() => {
    Axios.get("https://data-hazel-six.vercel.app/restaurants").then((res) => {
      setRestaurants(res.data);
    });
  }, []);

  const handleCitySelect = (event) => {
    setSelectedCity(event.target.value);
    setSelectedZone("");
    setSelectedRestaurant("");
  };

  const handleZoneSelect = (event) => {
    setSelectedZone(parseInt(event.target.value));
    setSelectedRestaurant("");
  };

  const handleRestaurantSelect = (event) => {
    const title = event.target.value;
    setSelectedRestaurant(title);
    const selectedRestaurant = restaurants.find(
      (restaurant) => restaurant.title === title
    );
    if (selectedRestaurant) {
      setSelectedRestaurantLocation({
        lat: selectedRestaurant.location.lat,
        lng: selectedRestaurant.location.lng
      });
    }
  };

  useEffect(() => {
    if (selectedCity && selectedZone) {
      const startIndex = (selectedZone - 1) * 20;
      const endIndex = selectedZone * 20;
      Axios.get(`https://data-hazel-six.vercel.app/restaurants/${selectedCity}`).then((res) => {
        setRestaurants(res.data.slice(startIndex, endIndex));
      });
    }
  }, [selectedCity, selectedZone]);

  return (
    <>
      <Header />
      <span style={{ display: "block", height: "20px" }}></span>
  
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <select className="form-select" aria-label="Default select example" value={selectedCity} onChange={handleCitySelect}>
                <option selected disabled>Select a city</option>
                <option value="Casablanca">Casablanca</option>
                <option value="Tanger">Tanger</option>
                <option value="El Jadida">El Jadida</option>
                {/* add more cities as needed */}
              </select>
            </div>
  
            <div className="mb-3">
              <select className="form-select" aria-label="Default select example" value={selectedZone} onChange={handleZoneSelect}>
                <option selected disabled>Select a zone</option>
                <option value="1">Zone 1</option>
                <option value="2">Zone 2</option>
                <option value="3">Zone 3</option>
                <option value="4">Zone 4</option>
              </select>
            </div>
  
            <div className="mb-3">
              <select className="form-select" aria-label="Default select example" value={selectedRestaurant} onChange={handleRestaurantSelect}>
                <option selected disabled>Select a restaurant</option>
                {restaurants.map((restaurant) => (
                  <option value={restaurant.title} key={restaurant._id}>
                    {restaurant.title}
                  </option>
                ))}
              </select>
            </div>
  
            {selectedRestaurant && (
              <div className="container">
                <h2>{selectedRestaurant}</h2>
                {restaurants.map((restaurant) => {
                  if (restaurant.title === selectedRestaurant) {
                    // Calculate the number of filled stars based on the total score
                    const totalScore = restaurant.totalScore;
                    const filledStars = Math.floor(totalScore);
                    const hasHalfStar = totalScore % 1 !== 0;
  
                    // Create an array of star elements
                    const stars = [];
                    for (let i = 0; i < 5; i++) {
                      let starColor;
                      if (i < filledStars) {
                        starColor = 'yellow'; // Fully filled stars
                      } else if (i === filledStars && hasHalfStar) {
                        starColor = 'yellow'; // Half-filled star
                      } else {
                        starColor = 'gray'; // Empty stars
                      }
                      stars.push(<span key={i} className="star" style={{ color: starColor }}>&#9733;</span>);
                    }
  
                    return (
                      <div className="card" key={restaurant._id}>
                        <div className="card-body">
                          <p className="card-text">Address: {restaurant.address}</p>
                          <p className="card-text">
                            Website: <a href={restaurant.website} className="card-link">{restaurant.website}</a>
                          </p>
                          <p className="card-text">Phone: {restaurant.phone}</p>
                          <p className="card-text" style={{ fontSize: '24px' }}>Total Score: {stars}</p>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            )}
          </div>
  
          <div className="col-md-6">
            <LoadScript googleMapsApiKey="AIzaSyD0yMlmaWjIpewkPhPyFnOJHySVYeqvW-4">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={{
                  lat: selectedRestaurantLocation.lat,
                  lng: selectedRestaurantLocation.lng
                }}
                zoom={zoom}
              >
                <Marker position={selectedRestaurantLocation} />
                {restaurants.map((restaurant) => (
                  <Marker
                    key={restaurant._id}
                    position={{
                      lat: restaurant.location.coordinates[1],
                      lng: restaurant.location.coordinates[0]
                    }}
                  />
                ))}
              </GoogleMap>
            </LoadScript>
          </div>
          
        </div>
      </div>
  
      <Footer />
    </>
  );
                  }  