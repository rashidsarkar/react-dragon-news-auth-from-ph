import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const newesData = useLoaderData() || [];
  console.log(newesData);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        {/* news Container */}
        <div className=" md:col-span-2">
          {newesData.map((aNews) => (
            <NewsCard key={aNews.id} news={aNews}></NewsCard>
          ))}
        </div>

        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
