import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";
import { HeaderProps } from "../../lib/types";

function FeedbackForm({ handleAddFeedback }: HeaderProps) {
  const [feedback, setFeedback] = useState("");
  const [showValidIndicator, setShowValidIndicator] = useState(false);
  const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length > MAX_CHARACTERS) {
      return;
    }
    setFeedback(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (feedback.includes("#") && feedback.length >= 5) {
      setShowValidIndicator(true);
      setTimeout(() => {
        setShowValidIndicator(false);
      }, 2000);
    } else {
      setShowInvalidIndicator(true);
      setTimeout(() => {
        setShowInvalidIndicator(false);
      }, 2000);
      return;
    }

    handleAddFeedback(feedback);
    setFeedback("");
  };

  const charactersLeft = MAX_CHARACTERS - feedback.length;
  return (
    <form
      className={`form ${showValidIndicator ? "form--valid" : ""} ${
        showInvalidIndicator ? "form--invalid" : ""
      }`}
      onSubmit={handleSubmit}
    >
      <textarea
        value={feedback}
        id="feedback-textarea"
        placeholder="h"
        spellCheck={false}
        onChange={handleChange}
      ></textarea>
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remeber to hashtag the company
      </label>
      <div>
        <p className="u-italic">{charactersLeft}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
