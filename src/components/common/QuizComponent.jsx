import { useCallback, useState } from "react";

const QuizComponent = ({ ques, onClick, onTouchEnd }) => {
  const handleAction = (fn, index) => {
    setTimeout(() => {
      fn();
    }, 500);
    setSelectedOptionIndex(index);
  };

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  return (
    <div className="h-full w-full bg-milk-white rounded-xl text-black-coffee px-5 py-9 shadow-lg border-b-2 ">
      <h1 className="text-sm font-semibold mb-7 text-left">{ques.question}</h1>

      <ul aria-labelledby="question" className="space-y-2">
        {ques.options.map((option, index) => {
          return (
            <li key={index}>
              <button
                role="option"
                aria-selected={selectedOptionIndex === index}
                onClick={() => {
                  handleAction(onClick, index);
                }}
                onTouchEnd={() => {
                  handleAction(onTouchEnd, index);
                }}
                className={`w-full text-xs font-normal text-left px-4 py-2 rounded-xl transition-colors border
                  ${
                    selectedOptionIndex === index
                      ? " border-[#00A55C]/20 bg-[#00A55C]/10 active:ring-2 active:ring-[#00A55C]/20"
                      : "border-black/25"
                  }`}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuizComponent;
