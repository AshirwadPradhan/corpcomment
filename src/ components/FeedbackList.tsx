import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
  {
    upvotes: 356,
    badge: "T",
    company: "Trello",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, officiis nam aperiam facilis beatae quam omnis architecto dicta quia repudiandae illo quasi tempora qui, ullam iusto culpa non voluptatibus necessitatibus?",
    timeAgo: "2d",
  },
  {
    upvotes: 356,
    badge: "T",
    company: "Trello",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, officiis nam aperiam facilis beatae quam omnis architecto dicta quia repudiandae illo quasi tempora qui, ullam iusto culpa non voluptatibus necessitatibus?",
    timeAgo: "2d",
  },
  {
    upvotes: 356,
    badge: "T",
    company: "Trello",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, officiis nam aperiam facilis beatae quam omnis architecto dicta quia repudiandae illo quasi tempora qui, ullam iusto culpa non voluptatibus necessitatibus?",
    timeAgo: "2d",
  },
];

function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}

export default FeedbackList;
