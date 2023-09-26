import { useState } from "react";
import { Question } from "@/components/Question";
import { questions } from "@/data/questions.json";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content">
          <div className="max-w-md flex flex-col gap-3">
            {currentQuestionIndex <= questions.length - 1 ? (
              <>
                <Question
                  key={currentQuestion.title}
                  title={currentQuestion.title}
                  answers={currentQuestion.answers}
                />
                <button className="mt-3 btn btn-primary" onClick={handleAnswer}>
                  Next Question
                </button>
              </>
            ) : (
              <div>Hello, result</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
