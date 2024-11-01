import logo from './logo.svg';
import './App.css';
import MarksSheet from './components/MarksSheet';

function App() {
  return (
    <div className="App">
      <h1>Dilshuknagar Public School</h1>
      <MarksSheet studentName="uday" engMarks="98" telMarks="85" hindiMarks="84" scienceMarks="90" socialMarks="80" mathsMarks="98"/>
      <MarksSheet studentName="Sreenath" engMarks="86" telMarks="82" hindiMarks="76" scienceMarks="94" socialMarks="67" mathsMarks="93"/>
      <MarksSheet studentName="Krishna" engMarks="86" telMarks="80" hindiMarks="34" scienceMarks="92" socialMarks="78" mathsMarks="92"/>
      <MarksSheet studentName="Vikram" engMarks="99" telMarks="81" hindiMarks="80" scienceMarks="91" socialMarks="82" mathsMarks="94"/>
      <MarksSheet studentName="Manoj" engMarks="85" telMarks="83" hindiMarks="81" scienceMarks="88" socialMarks="84" mathsMarks="97"/>
    </div>
  );
}

export default App;
