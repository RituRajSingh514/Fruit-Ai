import React from 'react';
import '../css/faq.css';

const FAQ = () => {
  const questions = [
    {
      title: "How is Tangerine healthy?",
      text: "Tangerine is a great health booster due to its high vitamin C content, which supports the immune system and skin health.",
      imageUrl: "https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?cs=srgb&dl=pexels-pixabay-327098.jpg&fm=jpg",
    },
    {
      title: "How is Tangerine healthy?",
      text: "Tangerine is a great health booster due to its high vitamin C content, which supports the immune system and skin health.",
      imageUrl: "https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?cs=srgb&dl=pexels-pixabay-327098.jpg&fm=jpg",
    },
    {
      title: "How is Tangerine healthy?",
      text: "Tangerine is a great health booster due to its high vitamin C content, which supports the immune system and skin health.",
      imageUrl: "https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?cs=srgb&dl=pexels-pixabay-327098.jpg&fm=jpg",
    },
    {
      title: "How is Tangerine healthy?",
      text: "Tangerine is a great health booster due to its high vitamin C content, which supports the immune system and skin health.",
      imageUrl: "https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?cs=srgb&dl=pexels-pixabay-327098.jpg&fm=jpg",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-heading">FAQ Section</h1>
      <div className="faq-list">
        {questions.map((q, index) => (
          <div key={index} className="faq-item">
            <img src={q.imageUrl} alt="Tangerine" className="faq-image" />
            <div className="faq-text-container">
              <h3 className="faq-question">{q.title}</h3>
              <p className="faq-answer">{q.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
