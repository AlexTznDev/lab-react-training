function IdCard(props) {

  return (
    <div style={{ display: 'flex' , border:'1px solid black', gap:"10px", }}>
      <div>
        <img src={props.picture} alt="" />
      </div>

      <div style={{display: "flex", flexDirection: "column", gap:"10px"}}>
        <h4>first name: {props.firstName}</h4>
        <h4>Last name: {props.lastName}</h4>
        <h4>Gender: {props.gender}</h4>
        <h4>Height: {props.height}</h4>
        <h4>Birth: {props.birth}</h4>
      </div>
    </div>
  );
}

export default IdCard;
