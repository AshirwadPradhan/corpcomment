import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { FeedbackListProps } from "../../lib/types";

function FeedbackList({ feedbackItems, loading, error }: FeedbackListProps) {
  return (
    <ol className="feedback-list">
      {loading ? <Spinner /> : null}
      {error ? <ErrorMessage message={error} /> : null}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}

export default FeedbackList;
