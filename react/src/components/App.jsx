import './style.css';
import DemoUseMemo from './DemoUseMemo';
import Hackernews from './HackerNews';


const App = props => {

    return <>
        <h1>Hello React with Vite!</h1>
        {/* <DemoUseMemo/> */}
        <Hackernews/>
    </>;
}

export default App;