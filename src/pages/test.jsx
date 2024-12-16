import QuizComponent from "@/components/common/QuizComponent";
import React, { useState, useMemo } from "react";
import TinderCard from "react-tinder-card";
import initialQuestions from "../assets/questions";

const CardSwiper = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(initialQuestions.length - 1);

  const childRefs = useMemo(
    () =>
      Array(initialQuestions.length)
        .fill(0)
        .map(() => React.createRef()),
    []
  );

  // Unified swipe logic
  const triggerSwipe = async (direction, index) => {
    const currentCard = childRefs[index]?.current;
    if (currentCard) {
      await currentCard.swipe(direction); // Trigger animation
      setQuestions((prevQuestions) =>
        prevQuestions.filter((_, idx) => idx !== index)
      );
      setCurrentIndex((prev) => prev - 1); // Update current index
    }
  };

  // Handle option selection
  const handleOptionClick = (index) => {
    console.log("Selected index:", index);
    triggerSwipe("left", index); // Use unified swipe logic
    console.log("removed", index);
  };

  // Swipe left button handler
  const handleSwipeLeft = () => {
    if (currentIndex >= 0) {
      triggerSwipe("left", currentIndex);
    }
  };

  // Swipe right button handler
  const handleSwipeRight = () => {
    if (currentIndex >= 0) {
      triggerSwipe("right", currentIndex);
    }
  };

  return (
    <div className="card-swiper-container">
      <div className="card-container">
        {questions.map((question, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="absolute"
            key={index}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{
                transform: `translateY(${index * -1}px) rotateX(${
                  index * 2
                }deg)`,
                zIndex: initialQuestions.length - index,
                width: `calc(100% + ${index * 3}px)`,
              }}
              className="relative w-full rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <QuizComponent
                ques={question}
                onClick={() => handleOptionClick(index)}
                onTouchEnd={() => handleOptionClick(index)}
              />
            </div>

            {/* <div className="card">
              <h3>{question.question}</h3>
              {Array.isArray(question.options) &&
              question.options.length > 0 ? (
                <ul className="options-list">
                  {question.options.map((option, optIndex) => (
                    <li
                      key={optIndex}
                      onClick={() => handleOptionClick(option, index)}
                      onTouchStart={() => handleOptionClick(option, index)}
                      className="option-item"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-options">No options provided.</p>
              )}
            </div> */}
          </TinderCard>
        ))}
      </div>

      {/* <div className="controls">
        <button
          className="swipe-button"
          onClick={handleSwipeLeft}
          disabled={currentIndex < 0}
        >
          Swipe Left
        </button>

        <button
          className="undo-button"
          onClick={() =>
            setCurrentIndex((prev) =>
              prev < initialQuestions.length - 1 ? prev + 1 : prev
            )
          }
          disabled={currentIndex >= questions.length - 1}
        >
          Undo Swipe
        </button>

        <button
          className="swipe-button"
          onClick={handleSwipeRight}
          disabled={currentIndex < 0}
        >
          Swipe Right
        </button>
      </div> */}
    </div>
  );
};

export default CardSwiper;
