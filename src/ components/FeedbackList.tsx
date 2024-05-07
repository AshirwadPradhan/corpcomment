import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";

function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setFeedbackItems(data.feedbacks);
      });
  }, []);

  return (
    <ol className="feedback-list">
      {loading ? <Spinner /> : null}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}

export default FeedbackList;
