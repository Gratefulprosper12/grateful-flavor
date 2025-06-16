import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('/api/restaurants')
      .then(res => setRestaurants(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Restaurants</h2>
      <div className="row">
        {restaurants.map((r, i) => (
          <div className="col-md-4" key={i}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{r.name}</h5>
                <p className="card-text">{r.cuisine}</p>
                <p className="card-text">Rating: {r.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;