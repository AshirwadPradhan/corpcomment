import { HeaderProps } from "../lib/types";
import FeedbackForm from "./FeedbackForm";
import Logo from "./Logo";
import PageHeading from "./PageHeading";
import Pattern from "./Pattern";

function Header({ handleAddFeedback }: HeaderProps) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm handleAddFeedback={handleAddFeedback} />
    </header>
  );
}

export default Header;
