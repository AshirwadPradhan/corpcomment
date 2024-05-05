function FeedbackForm() {
  return (
    <form className="form">
      <textarea
        id="feedback-textarea"
        placeholder="h"
        spellCheck={false}
      ></textarea>
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remeber to hashtag the company
      </label>
      <div>
        <p className="u-italic">150</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
