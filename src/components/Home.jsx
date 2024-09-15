import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1 className="title">Fruit.AI</h1>
      <p className="tagline">"Be Healthy!"</p>
      <div className="services">
        <button className="service-btn chat" onClick={() => navigate('/chatbot')}>Chat.</button>
        <button className="service-btn translator" onClick={() => navigate('/translator')}>
          <img src="https://cdn-icons-png.flaticon.com/256/281/281776.png" alt="Translator" className="icon" />
        </button>
        <button className="service-btn faq" onClick={() => navigate('/faq')}>FAQs</button>
        <button className="service-btn about" onClick={() => navigate('/about')}>About</button>
      </div>
    </div>
  );
};

export default Home;

