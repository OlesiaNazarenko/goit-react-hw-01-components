import Profile from "./components/socialNetworksProfile/Profile";
import user from "./components/socialNetworksProfile/user.json";

import Statistic from "./components/statisticSection/Statistic";
import statisticData from "./components/statisticSection/statistical-data.json";

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statisticData} />;
    </>
  );
}
