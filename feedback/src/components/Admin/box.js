import "./Box.css"

const Box = (props) => {
    return(
        <div>
            <div className="col outerBox">

                <div className="row boxText">user ID - {props.userid}</div>
                <div className="row boxText">{props.q1} - {props.a1}</div>
                <div className="row boxText">{props.q2} - {props.a2}</div>
                <div className="row boxText">{props.q3} - {props.a3}</div>
                <div className="row boxText">{props.q4} - {props.a4}</div>
                <div className="row boxText">{props.q5} - {props.a5}</div>

                
            </div>
        </div>
    )
}

export default Box;