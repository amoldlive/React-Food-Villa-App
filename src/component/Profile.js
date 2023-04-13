import { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState("");

  const { login, id, avatar_url, name, company, location } = profile;

  useEffect(() => {
    getProfileDetails();

    return ()=>{
      console.log("unmounting component...");
    }
  }, []);

  async function getProfileDetails() {
    const profileData = await fetch("https://api.github.com/users/amoldlive");
    const profileJson = await profileData.json();
    console.log(profileJson);
    setProfile(profileJson);
  }

  return profile.length === 0 ? (
    <div>profile page shimer</div>
  ) : (
        <div className="Profile">
            <img className="rounded-full w-28 h-28" src={avatar_url} alt="avatar image"/>
            <h2 className="font-semibold">{name}</h2>
            <p>{id} | {login}</p>
            <p>Company : {company}</p>
            <p>Location : {location}</p>
        </div>
  );
};
export default Profile;
