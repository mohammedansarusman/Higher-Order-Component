import "./card.css"
const Card = (props) =>{
    console.log("Card component called",props);
    const {name,age,promoted} = props.data;
    return(
        <div className="card-div">
            <h1>{name}</h1>
            <h2>{age}</h2>
            {/* {promoted===true ? <h5>Passed</h5> : <h5>Failed</h5>} */}
        </div>
    )
}

export const withPromotedLabel = (Xcard) =>{
    console.log("what is Xcard",Xcard);
    return (props)=>{
        console.log("what is here",props)
        return(
            <div>
                {console.log('label')}
                <label>Promoted</label>
                <Xcard {...props}/>
            </div>
        )
    }  
}


export default Card;