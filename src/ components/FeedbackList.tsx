import { TriangleUpIcon } from "@radix-ui/react-icons";

function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>ByteGrad</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            libero impedit facilis dolorum sequi facere?
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}

export default FeedbackList;
