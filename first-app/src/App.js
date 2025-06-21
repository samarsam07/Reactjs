import "./userProfile.css"
// const App=()=>{
//     const element=<h2>Hello World</h2>
//     // embeded expression in JSX
//     const name ="John Doe";
//     const element2=<h2>hello {name}</h2>
//     // JSX as an expression
//     const element3=(
//         <div>
//             <h1>Hello World</h1>
//             <h2>It is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     )
//     return element3; 
// }
const App=()=>{
    const containerStyle={
        textAlign:"center",
        padding:"20px",
        margin:"20px",
    };
    return (
       
        <div style={containerStyle}>
            <img src="https://cdn.pixabay.com/photo/2024/12/18/10/10/tree-9274973_960_720.png" alt="avatar" 
            style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
            }} />
            <h2 className="name">John Doe</h2>
            <p className="bio">Full Stack developer</p>
            <ul>
                <li>JavaScript</li>
                <li>Java</li>
                <li>C++</li>
            </ul>
        </div>
    );
}


export default App;