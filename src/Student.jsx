import Score from "./Score"

const Student = (props) => { 
  return (
    <>
      <h3>{props.name}</h3>
      <h3>{props.bio}</h3>
      {props.scores.map((score, idx) => 
        <Score 
          key={idx}
          date={score.date}
          score={score.score}
        />  
      )}
    </>
  )
}

export default Student