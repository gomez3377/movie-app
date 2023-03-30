import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  const navigateHandler = () => navigate('film-search')
  return (
    <div>
      <h1>Welcome to Movie Finder</h1>
      <p>
        Here at Movie Finder, we provide detailed information for every movie,
        actor, and genre, so you can discover a new favorite movie. When you
        sign up you can make a list of your favorite movies and rate them.
      </p>
      <button>
          Sign Up Now for a free account!
      </button>
      <button>Sign In</button>

        <div>
        <h1>Looking for a Film?</h1>
      <button onClick={navigateHandler}>Get Started</button>
        </div>
    </div>
  );
};

export default Home;
