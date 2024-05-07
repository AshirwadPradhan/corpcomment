import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import HashtagItem from "./HashtagItem";

function HashtagList() {
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const handleSelectCompany = useFeedbackItemsStore(
    (state) => state.selectCompany
  );
  return (
    <ul className="hashtags">
      {companyList.map((company: string) => (
        <HashtagItem
          key={company}
          company={company}
          onClick={handleSelectCompany}
        />
      ))}
    </ul>
  );
}

export default HashtagList;
