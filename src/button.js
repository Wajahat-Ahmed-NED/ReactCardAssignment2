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
// function Card(props){
//     console.log(props.info)
    // return (

    //     <div className="clname">
    //         <h1>{props.info[0].name}</h1>
    //     {/* <Heading h={man[0].name} /> */}

    //     <hr />
    //     <img src={props.info[0].img} alt="" />
    //     <hr />
    //     <p>{props.info[0].type}</p>
    //     {/* <Img h={props.info[0].detail} /><hr /> */}
    //     {/* <Detail h={man[0].detail} /> */}
    //     <p>{props.info[0].detail}</p>
    //     <hr />
    //     {/* <Price h={man[0].price} /> */}
    //     <p>{props.info[0].price}</p>

    //   </div>
      
    // )
// }
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