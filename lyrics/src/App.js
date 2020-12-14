import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Album from './components/Album';
import {Context, GlobalProvider} from './context/State'
import Lyrics from './components/Lyrics';


function App() {
  return (
    
    // <div className="App">
    //   <Container fixed>
    //   <ButtonGroup variant="text" color="default" aria-label="">
    //     <Button startIcon={<SaveIcon/>} size="large" variant="contained" color="secondary">
    //       Hello Worl
    //     </Button>        
    //   </ButtonGroup>
    // <TextField
    //   id="1"
    //   label="hello"
    //   value={text}
    //   onChange={(e)=>(settext(e.target.value))}
    //   variant='outlined'
    //   color='secondary'
    // />
    // <FormControlLabel
    //   label="hhhh"
    //   control={
    //     <Checkbox
    //       value="hhhh"
    //       checked={checked}
    //       onChange={(e)=>setstate(e.target.checked)}
    //       color="primary"
    //     />
    //   }
    // />
    // </Container>
    // </div>

    <GlobalProvider>
      <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Album} />
              <Route path='/lyrics/:id' component={Lyrics} />
          </Switch>
          
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
