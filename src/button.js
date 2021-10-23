function Button(props) {


    return <button {...props}>{props.h}</button>
}

function Heading(props) {
    return <h1 >{props.h}</h1>
}
function Detail(props) {
    return (
        <>
            <p style={{ color: 'grey', fontSize: '1.2em' }}>
                {props.h}
            </p>
        </>
    )
}
function Price(props) {
    return (
        <>
            <p style={{ color: 'grey', fontSize: '1.2em' }}>
            Price : {props.h} Rs
            </p>
        </>
    )
}
// function Inp(props){
//     return (
//         <>
//         <select {...props}>
//             <option value="">{props.h}</option>
//         </select>
//         <input {...props}/>
//         </>
//     )
// }



function Img(props){
    return <img style={{width:"200px",height:"200px"}} src={props.h}></img>
}

export { Button, Heading, Detail,Price,Img }