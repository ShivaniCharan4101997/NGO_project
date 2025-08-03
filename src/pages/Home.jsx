import Volunteer from "../components/Volunteer";
import Hero from "../components/Hero";
import LatestEvents from "../components/LatestEvents";
import GridPicture from "../components/GridPicture";
import LatestDonation from "../components/LatestDonation";
import Achievements from "../components/Achievements";
const Home = () => {
  return (
    <div>
      {/* hero section */}
      <Hero />
      {/* Achievements */}
      <Achievements />
      {/* Latest Donation */}
      <LatestDonation />
      {/* gallary section */}
      <GridPicture />
      {/* latest events section */}
      <LatestEvents />
      {/* be a volunteer section */}
      <Volunteer />
    </div>
  );
};

export default Home;
