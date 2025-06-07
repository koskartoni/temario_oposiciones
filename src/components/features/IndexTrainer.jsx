// En: src/components/features/IndexTrainer.jsx
import React, { useState } from 'react';
import { FaBrain } from 'react-icons/fa';

const IndexTrainer = ({ sections, onExit }) => {
    const [answers, setAnswers] = useState({});
    const [verified, setVerified] = useState({});

    const handleInputChange = (id, value) => {
        setAnswers(prev => ({ ...prev, [id]: value }));
    };

    const checkAnswer = (id, correctAnswer) => {
        const userAnswer = answers[id] || '';
        // Normalizamos el texto: quitamos espacios extra, convertimos a minúsculas y quitamos el número inicial (e.g., "1. ")
        const normalize = (str) => str.trim().toLowerCase().replace(/^\d+(\.\d+)*\.\s*/, '');
        const isCorrect = normalize(userAnswer) === normalize(correctAnswer);
        setVerified(prev => ({ ...prev, [id]: isCorrect }));
    };

    return (
        <div className="index-trainer-immersive">
            <button className="exit-practice-btn" onClick={onExit}>
                ← Volver al Temario
            </button>
            <div className="index-trainer-card">
                <div className="index-trainer-header">
                    <FaBrain />
                    <h3>Modo Práctica: Índice del Tema</h3>
                </div>
                <div className="index-trainer-instructions">
                    Escribe el título completo de cada sección (sin el número) y pulsa "Verificar" para memorizar la estructura del tema.
                </div>
                <ul className="index-trainer-list">
                    {sections.map(section => {
                        const level = (section.shortTitle.match(/\./g) || []).length;
                        const isVerified = verified[section.id] !== undefined;
                        const isCorrect = verified[section.id];
                        let inputClassName = 'trainer-input';
                        if (isVerified) {
                            inputClassName += isCorrect ? ' correct' : ' incorrect';
                        }

                        // --- CÓDIGO CORREGIDO ---
                        // Se añade la clase 'trainer-item' y se estructura con spans para el control por CSS Grid
                        return (
                            <li key={section.id} className="trainer-item">
                                
                                <div className="trainer-item-content">
                                  <div className="trainer-input-group">
                                    <input
                                      type="text"
                                      className={inputClassName}
                                      placeholder="Escribe el título aquí..."
                                      value={answers[section.id] || ''}
                                      onChange={(e) => handleInputChange(section.id, e.target.value)}
                                      disabled={isVerified && isCorrect}
                                    />
                                    {!isVerified && (
                                      <button onClick={() => checkAnswer(section.id, section.title)}>
                                        Verificar
                                      </button>
                                    )}
                                  </div>
                                  {isVerified && !isCorrect && (
                                    <div className="correct-answer">
                                      <strong>Respuesta correcta:</strong> {section.title}
                                    </div>
                                  )}
                                </div>
                            </li>
                        );
                        // --- FIN DE LA CORRECCIÓN ---
                    })}
                </ul>
            </div>
        </div>
    );
};

export default IndexTrainer;