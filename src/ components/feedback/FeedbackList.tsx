import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

function FeedbackList() {
  const loading = useFeedbackItemsStore((state) => state.loading);
  const error = useFeedbackItemsStore((state) => state.error);
  const feedbackItems = useFeedbackItemsStore((state) =>
    state.getFilteredFeedbackItems()
  );
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
