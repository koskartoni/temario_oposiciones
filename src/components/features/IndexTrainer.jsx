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

                        return (
                            <li key={section.id}>
                                {/* El div del grupo ahora recibe el style para la sangría */}
                                <div className="trainer-input-group full-width" style={{ marginLeft: `${level * 2}rem` }}>
                                    <input
                                        type="text"
                                        className={inputClassName}
                                        placeholder={`Escribe el título del apartado ${section.shortTitle}`}
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
                                {/* El div de la respuesta correcta también recibe la sangría */}
                                {isVerified && !isCorrect && (
                                    <div className="correct-answer full-width" style={{ marginLeft: `${level * 2}rem` }}>
                                        <strong>Respuesta correcta:</strong> {section.title}
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default IndexTrainer;