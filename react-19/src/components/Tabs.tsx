import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiCoursera } from "react-icons/si";
import { useState } from "react";
import Card from "./Card";
import About from "./About";
import Contact from "./Contact";

const tabs = [
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://media.istockphoto.com/id/1226328537/vector/image-place-holder-with-a-gray-camera-icon.jpg?s=2048x2048&w=is&k=20&c=X3Dn947QEwkgJN_pPhYWA1SV9MTmMV-4votUboqubCs="
          />
        ))}
      </div>
    ),
  },
  {
    id: "about",
    icon: <FaInfoCircle />,
    label: "About",
    content: <About />,
  },
  {
    id: "projects",
    icon: <GoProjectSymlink />,
    label: "Projects",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://media.istockphoto.com/id/1226328537/vector/image-place-holder-with-a-gray-camera-icon.jpg?s=2048x2048&w=is&k=20&c=X3Dn947QEwkgJN_pPhYWA1SV9MTmMV-4votUboqubCs="
          />
        ))}
      </div>
    ),
  },
  {
    id: "courses",
    icon: <SiCoursera />,
    label: "Courses",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://media.istockphoto.com/id/1226328537/vector/image-place-holder-with-a-gray-camera-icon.jpg?s=2048x2048&w=is&k=20&c=X3Dn947QEwkgJN_pPhYWA1SV9MTmMV-4votUboqubCs="
          />
        ))}
      </div>
    ),
  },
  {
    id: "contact",
    icon: <FaPhone />,
    label: "Contact",
    content: <Contact />,
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return(
  <div className="p-4 mt-[4rem]">
    <div className="fex border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`flex-1 text-center py-4 px-10 font-medium text-xl ${
            activeTab === tab.id ? "border-b-2" : "text-gray-600"
          }`}
          onClick={() => setActiveTab(tab.id)}>
          <div className="flex item-center justify-center space-x-2">
            {tab.icon}
            <span>{tab.label}</span>
          </div>
        </button>
      ))}
    </div>
    <div className="mt p-4 rounded-lg"> 
        {tabs.find((tab)=>tab.id===activeTab)?.content}
    </div>
  </div>);
};

export default Tabs;
