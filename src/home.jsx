import React from "react";

const HotelHomepage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Our Hotel</h1>
      </header>
      <section>
        <h2>Featured Rooms</h2>
        <div className="room-card">
          <img src="C:\Users\Majed\Desktop\NodeApi\pj\front-end\src\pictures\1.jpg" alt="Room 1" />
          <h3>Deluxe Suite</h3>
          <p>Spacious suite with a beautiful view.</p>
          <button>Book Now</button>
        </div>

        <div className="room-card">
          <img src="C:\Users\Majed\Desktop\NodeApi\pj\front-end\src\pictures\2.jpg" alt="Room 2" />
          <h3>Executive Room</h3>
          <p>Comfortable room for a pleasant stay.</p>
          <button>Book Now</button>
        </div>
      </section>

      <section>
        <h2>Hotel Amenities</h2>
        <ul>
          <li>Free Wi-Fi</li>
          <li>Swimming Pool</li>
          <li>On-site Restaurant</li>
          <li>Fitness Center</li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2023 Our Hotel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HotelHomepage;
