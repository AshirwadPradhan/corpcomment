import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItemProps = {
  feedbackItem: {
    upvoteCount: number;
    badgeLetter: string;
    company: string;
    text: string;
    daysAgo: string;
  };
};

function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.daysAgo}d</p>
    </li>
  );
}

export default FeedbackItem;
