export type TFeedbackItem = {
  id: number;
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  daysAgo: number;
};

export type ContainerProps = {
  feedbackItems: TFeedbackItem[];
  loading: boolean;
  error: string;
  handleAddFeedback: (newFeedback: string) => void;
};

export type FeedbackListProps = {
  feedbackItems: TFeedbackItem[];
  loading: boolean;
  error: string;
};

export type HeaderProps = {
  handleAddFeedback: (newFeedback: string) => void;
};
