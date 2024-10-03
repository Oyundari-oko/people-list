import { useSearchParams } from "next/navigation";
const List = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const number = searchParams.get("number");
  return (
    <div>
      <div className="nameStyle2">email: {email}</div>
      <div className="nameStyle2">number: {number}</div>
    </div>
  );
};
export default List;
