import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length > MAX_CHARACTERS) {
      return;
    }
    setFeedback(e.target.value);
  };

  const charactersLeft = MAX_CHARACTERS - feedback.length;
  return (
    <form className="form">
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
