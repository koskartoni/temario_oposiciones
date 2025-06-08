// En: src/components/blocks/Quiz.jsx
import React, { useState } from 'react';
import { FaQuestionCircle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Quiz = ({ title, questions }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (questionIndex, optionIndex) => {
    if (submitted) return;
    setAnswers({
      ...answers,
      [questionIndex]: optionIndex,
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getOptionClassName = (qIndex, oIndex) => {
    if (!submitted) return 'quiz-option';
    const isCorrect = questions[qIndex].correctAnswerIndex === oIndex;
    const isSelected = answers[qIndex] === oIndex;
    if (isCorrect) return 'quiz-option correct';
    if (isSelected && !isCorrect) return 'quiz-option incorrect';
    return 'quiz-option';
  };

  return (
    <div className="quiz-card">
      <div className="quiz-header">
        <FaQuestionCircle />
        <h4>{title}</h4>
      </div>
      <div className="quiz-content">
        {questions.map((q, qIndex) => (
          <div key={qIndex} className="quiz-question-block">
            <p className="quiz-question-text">{qIndex + 1}. {q.question}</p>
            <div className="quiz-options">
              {q.options.map((option, oIndex) => (
                <div key={oIndex} className={getOptionClassName(qIndex, oIndex)} onClick={() => handleOptionChange(qIndex, oIndex)}>
                  <span className="quiz-option-letter">{String.fromCharCode(97 + oIndex)})</span>
                  <span className="quiz-option-text">{option}</span>
                  {submitted && questions[qIndex].correctAnswerIndex === oIndex && <FaCheckCircle className="feedback-icon correct" />}
                  {submitted && answers[qIndex] === oIndex && questions[qIndex].correctAnswerIndex !== oIndex && <FaTimesCircle className="feedback-icon incorrect" />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {!submitted && (
        <button className="quiz-submit-btn" onClick={handleSubmit}>
          Corregir
        </button>
      )}
    </div>
  );
};

export default Quiz;