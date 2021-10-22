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
            Price : {props.h}
            </p>
        </>
    )
}





export { Button, Heading, Detail,Price }