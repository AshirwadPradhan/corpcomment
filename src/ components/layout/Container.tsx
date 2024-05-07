import { ContainerProps } from "../../lib/types";
import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";

function Container({
  feedbackItems,
  loading,
  error,
  handleAddFeedback,
}: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddFeedback={handleAddFeedback} />
      <FeedbackList
        feedbackItems={feedbackItems}
        loading={loading}
        error={error}
      />
    </main>
  );
}

export default Container;
