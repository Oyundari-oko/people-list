import Link from "next/link";
const List = (props) => {
  const name = props.name;
  const image = props.image;
  const work = props.work;
  const email = props.email;
  const number = props.number;

  return (
    <div>
      <button className="borderStyle">
        <img src={image} width={90} height={95} className="picStyle"></img>
        <div className="flex">
          {/* <Link target="blank" href={"https://4ejected.netlify.app/"}> */}
          <Link href={`./NewPage?email=${email}&number=${number}`}>
            <div className="nameStyle">{name}</div>
            <div className="nameStyle2">{work}</div>
          </Link>
        </div>
      </button>
    </div>
  );
};
export default List;
