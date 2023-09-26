import { Answer } from "@/types/Answer";
import { useAnswerStore } from "@/store/useAnswerStore";

export const Question = ({
  title,
  answers,
}: {
  title: string;
  answers: Answer[];
}) => {
  const { addAnswer } = useAnswerStore();

  return (
    <>
      <h3 className="text-3xl font-bold mb-3">{title}</h3>
      {answers.map((answer) => {
        return (
          <div key={answer.id} className="flex gap-3">
            <input
              onClick={() => {
                addAnswer({ question: title, answer: answer.text });
              }}
              type="radio"
              name={`radio-${title}`}
              className="radio"
            />
            <label className="radio-label">{answer.text}</label>
          </div>
        );
      })}
    </>
  );
};
