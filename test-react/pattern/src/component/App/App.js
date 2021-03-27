import FirstCounter from '../FirstCounter/FirstCounter'
import SecondCounter from '../SecondCounter/SecondCounter'
import FirstMouseMover from '../FirstMouseMover/FirstMouseMover'
import SecondMouseMover from '../SecondMouseMover/SecondMouseMover'
import HocToggler from '../HOC/HocToggler'
import Context from '../Context/Context/Context'

function App() {
  return (
    <div>
      <FirstCounter/>
      <SecondCounter/>
      <FirstMouseMover/>
      <SecondMouseMover/>
      <HocToggler>
        {value => {
          return (
          <div>
            <button onClick = {value.onToggle}>click me to change is Open</button>
            <span>isOpen: {value.isOpen}</span>
          </div>
          )
        }}
      </HocToggler>
      <Context/>
    </div>
  );
}

export default App;
