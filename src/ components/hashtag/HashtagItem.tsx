function HashtagItem({
  onClick,
  company,
  key,
}: {
  company: string;
  key: string;
  onClick: (company: string) => void;
}) {
  return (
    <li key={key}>
      <button onClick={() => onClick(company)}>#{company}</button>
    </li>
  );
}

export default HashtagItem;
