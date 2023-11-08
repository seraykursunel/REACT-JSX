import "./styles.css";

const state = {
  bootcamp: "BilgeAdam"
};

const course = "React";

const App = () => {
  return (
    <>
      <span className="blue-box">{state.bootcamp}</span>
      <span className="orange-box">{course}</span>
    </>
  );
};

export default App;
