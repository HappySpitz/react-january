import {Header, Posts, Users} from "./components";

const App = () => {

  return (
    <div>
        <Header/>
        <hr/>
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
            <Users/>
            <Posts/>
        </div>
    </div>
  );
}

export {App};
