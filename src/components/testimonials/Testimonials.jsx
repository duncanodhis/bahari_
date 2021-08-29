import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Benjamin Manyanky",
      title: "Real Estate Investor",
      img:
        "https://images.pexels.com/photos/2468487/pexels-photo-2468487.png?auto=compress&cs=tinysrgb&h=750&w=1260",
      icon: "assets/twitter.png",
      desc:
        "Better Call Dun!He is the best I've ever seen",
    },
    {
      id: 2,
      name: "Tony Wasonga",
      title: "Education Consultant",
      img:
        "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      icon: "assets/youtube.png",
      desc:
        "I needed a website that simply addresses the need of my clients and Dun,  made my communication easier simpler and  friendlier. ",
      featured: true,
    },
        {
      id: 2,
      name: "Khadiza Bohra",
      title: "Business woman",
      img:
        "https://images.pexels.com/photos/1162890/pexels-photo-1162890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      icon: "assets/twitter.png",
      desc:
        "My website had problems loading ,images sometimes the user cannot login ,Dun came through and everything works fine!Am so Excited!",
      featured: true,
    }
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
