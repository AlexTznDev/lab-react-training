function Greetings(props) {

  return (
    <div>
      <p style={{padding:".5rem 1rem", border: "2px solid black", margin:"0px", fontSize:"30px"}}>{props.lang === "fr" ? ("Bonjour"):("Hallo")} {props.children}</p>
    </div>
  )
}

export default Greetings
