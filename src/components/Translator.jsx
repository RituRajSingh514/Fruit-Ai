import React, { useState } from 'react';
import '../css/translator.css'


const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
];

const translations = {
  en: (text) => text, 
  hi: (text) => `अनुवादित पाठ: ${text}`,
  es: (text) => `Texto traducido: ${text}`, 
  fr: (text) => `Texte traduit: ${text}`, 
  de: (text) => `Übersetzter Text: ${text}`, 
};

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleTranslate = () => {
    const translate = translations[selectedLanguage];
    setTranslatedText(translate(inputText));
  };

  return (
    <div className="translator-container">
      <h2>Translator</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="input-text"
      />
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className="language-select"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      <button onClick={handleTranslate} className="translate-button">
        Translate
      </button>
      <p className="translated-text">Translated Text: {translatedText}</p>
    </div>
  );
};

export default Translator;
