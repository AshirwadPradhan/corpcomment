import { useEffect, useState } from "react";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./HashtagList";
import { TFeedbackItem } from "../lib/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddFeedback = async (newFeedback: string) => {
    const company = newFeedback
      .split(" ")
      .find((word) => word.startsWith("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      upvoteCount: 0,
      badgeLetter: company.substring(0, 1).toUpperCase(),
      company: company,
      text: newFeedback,
      daysAgo: 0,
    };
    setFeedbackItems([newItem, ...feedbackItems]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      }
    );
  };

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
    <div className="app">
      <Footer />
      <Container
        feedbackItems={feedbackItems}
        loading={loading}
        error={error}
        handleAddFeedback={handleAddFeedback}
      />
      <HashtagList />
    </div>
  );
}

export default App;
