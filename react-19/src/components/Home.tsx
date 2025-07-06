

const Home = () => {
//       const [activeTab, setActiveTab] = useState("home");
//   const [isPending,startTransition]=useTransition();

//   const handleTabChange=(tab)=>{
//     startTransition(()=>{
//       setActiveTab(tab)
//     })
//   }
//   const renderContent = () => {
//     switch (activeTab) {
//       case "home":
//         return <Home />;
//         break;
//       case "posts":
//         return <Posts />;
//         break;
//       case "contact":
//         return <Contact />;
//         break;
//       default:
//         return <Home />;
//         break;
//     }}
  return (
    <div>Home
         {/* <div className="tabs">
      <button onClick={()=>handleTabChange("home")}   className="border-2 p-3">Home </button>
      <button onClick={()=>handleTabChange("posts")} className="border-2 p-3">Posts </button>
      <button onClick={()=>handleTabChange("contact")} className="border-2 p-3">Contact </button>
    </div>
    {isPending && <p>Loading......</p>}
    <div className="content">{renderContent()}</div> */}
    </div>
  )
}

export default Home