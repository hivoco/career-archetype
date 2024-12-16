import QuizComponent from "@/components/common/QuizComponent";
import React, { useState, useMemo } from "react";
import TinderCard from "react-tinder-card";
import initialQuestions from "../../assets/questions";

const CardSwiper = ({ step, setStep }) => {
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

  const handleOptionClick = (index) => {
    setStep((prev) => prev + 1);
    step !== 11 && triggerSwipe("left", index); // if eleven then its the last card 
  };

  // const handleSwipeRight = () => {
  //   if (currentIndex >= 0) {
  //     triggerSwipe("right", currentIndex);
  //   }
  // };

  return (
    <div className="w-full h-full ">
      <div className="w-full h-full ">
        {questions.map((question, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="absolute w-full h-3/5"
            key={index}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{
                // transform: `translateY(${index * -1}px)`,
                height: `calc(100% - ${index * 1}px)`,
                width: `calc(100% - ${index * 1}px)`,
                zIndex: initialQuestions.length - index,
              }}
              className="relative border-solid border-b-slate-950 px-5 rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
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
