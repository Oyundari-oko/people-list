import List from "../components/PeopleList";
const list = () => {
  const peoplelist = [
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0yMC5wbmc.png",
      name: "James King",
      work: "President and Ceo",
      email: "King@james1023",
      number: "89873331",
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0yMS5wbmc.png",
      name: "Julie Taylor",
      work: "VP and Marketing",
      email: "juliee@teu7131",
      number: "99378211",
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNS0zODUucG5n.png",
      name: "Eugune Leo",
      work: "CFO",
      email: "EU@Gune",
      number: "233412332",
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png",
      name: "John Williams",
      work: "VP and Engineering",
      email: "JOHNY@wiLLIAMS",
      number: "126373334",
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
      name: "Ray Moore",
      work: "VP and Sales",
      email: "R@y2791",
      number: "14057688",
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png",
      name: "Paul Jones",
      work: "QA Manager",
      email: "Paul@rtw",
      number: "00997565",
    },
  ];
  return (
    <div>
      <div className="style">
        <button className="textStyle">Employee Directory</button>
        {peoplelist.map((data, index) => {
          return (
            <List
              image={data.image}
              key={index}
              name={data.name}
              work={data.work}
              email={data.email}
              number={data.number}
            />
          );
        })}
      </div>
    </div>
  );
};
export default list;
