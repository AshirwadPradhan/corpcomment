import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setFeedbackItems(data.feedbacks);
      })
      .catch(() => {
        setLoading(false);
        setError("Something went wrong");
      });
  }, []);

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
