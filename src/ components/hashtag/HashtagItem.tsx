function HashtagItem({
  onClick,
  company,
}: {
  company: string;
  key: string;
  onClick: (company: string) => void;
}) {
  return (
    <li key={company}>
      <button onClick={() => onClick(company)}>#{company}</button>
    </li>
  );
}

export default HashtagItem;
