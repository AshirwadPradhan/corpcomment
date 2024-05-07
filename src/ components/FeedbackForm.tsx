import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";
import { HeaderProps } from "../lib/types";

function FeedbackForm({ handleAddFeedback }: HeaderProps) {
  const [feedback, setFeedback] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length > MAX_CHARACTERS) {
      return;
    }
    setFeedback(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddFeedback(feedback);
    setFeedback("");
  };

  const charactersLeft = MAX_CHARACTERS - feedback.length;
  return (
    <form className="form" onSubmit={handleSubmit}>
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
