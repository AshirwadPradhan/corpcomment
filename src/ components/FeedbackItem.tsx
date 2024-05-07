import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItemProps = {
  feedbackItem: {
    upvotes: number;
    badge: string;
    company: string;
    text: string;
    timeAgo: string;
  };
};

function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvotes}</span>
      </button>
      <div>
        <p>{feedbackItem.badge}</p>
      </div>
      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.timeAgo}</p>
    </li>
  );
}

export default FeedbackItem;
