import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
    "https://dummyimage.com/1280x720/fff/aaa"
  );
  const [profileUrl, setProfileUrl] = useState(
    "https://robohash.org/mail@ashallendesign.co.uk"
  );
  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };
  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file))
    }
  };
  return (
    <div className="relative w-[96%] ml-[5em]">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="background image"
          className="w-full h-60 object-cover "
        />
        <button className="absolute top-2 right-2 bg-gray text-black p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={28} />
          </label>
          <input
            type="file"
            accept="image/*"
            id="banner-upload"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>
      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileUrl}
          alt="Profile image"
          className="w-40 h-40 rounded-full object-cover border-white relative"
        />
        <button className="absolute ml-[6.2rem] mt-[10rem] bg-gray text-black rounded-full p-2 hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={28} />
          </label>
          <input
            type="file"
            accept="image/*"
            id="profile-upload"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>
        {/* details */}
        <div className="ml-4 mt-4">
          <h1 className="text-3xl font-bold ml-[5rem]">Samar</h1>
          <p className="mt-2 ml-[5rem]">Random thing</p>
          <p className="mt-2 ml-[5rem]">small description for testing</p>

          <button className="ml-[5rem] mt-4 bg-red-600 text-black py-2 px-4 rounded hover:bg-red-500 "> click me</button>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Profile;
