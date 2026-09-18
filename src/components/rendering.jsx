function App(){
 
    let Students = ["harsha", "rahul"];

    return (
        <div>
       {
        Students.length > 0 ? (
            <p>students are available.</p>
        ):(<p>students are not available</p>)
       }
        </div>
    );
}

export default App