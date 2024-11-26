import Asider from "../layout/Asider/Asider";
import Header from "../layout/Header/Header";
import Main from "../layout/Main/Main";
import "./Home.css";
function Home() {
  return (

      <div className="wrapper">
        <Header></Header>
        <div style={{ flex: 1, display: "flex" }}>
          <Asider></Asider>
          <Main></Main>
        </div>
      </div>
  );
}

export default Home;
