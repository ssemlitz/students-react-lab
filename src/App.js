import './App.css';
import { studentList } from './data';
import Student from './Student'

function App() {
  const students = studentList.map((student, idx) => {
    return (
      <Student 
        key={idx}
        name={student.name}
        bio={student.bio}
        scores={student.scores}   
      />   
    )
    })
  return (
    <>
      <h2>Student List!</h2>
      <div>
        {students}
      </div>
    </>
  );
}

export default App;
