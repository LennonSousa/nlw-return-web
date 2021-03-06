import { CloseButton } from "../../CloseButton";
import feedbackSentImageUrl from "./../../../assets/feedback_sent.svg";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex  flex-col items-center py-10 w-[304px]">
        <img
          className="w-20"
          src={feedbackSentImageUrl}
          alt="Feedback enviado"
        />

        <span className="text-xl mt-2">Agradecemos o seu feedback!</span>

        <button
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:rign-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
