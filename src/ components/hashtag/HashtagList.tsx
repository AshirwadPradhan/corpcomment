import HashtagItem from "./HashtagItem";

function HashtagList({
  companyList,
  handleSelectCompany,
}: {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
}) {
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
