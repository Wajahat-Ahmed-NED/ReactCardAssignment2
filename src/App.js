import { useState } from 'react';
import './App.css';
import { Button, Heading, Detail, Price } from './button';
import logo from './logo.svg'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [user, setUser] = useState({})

  let products = [
    {
      name: "Knife",
      detail: "kdjflkasdfnlkasdk",
      price: 20
    },
    {
      name: "Knife",
      detail: "kdjflkasdfnlkasdk",
      price: 20
    },
    {
      name: "Knife",
      detail: "kdjflkasdfnlkasdk",
      price: 20
    },
    {
      name: "Knife",
      detail: "kdjflkasdfnlkasdk",
      price: 20
    }
  ]
  let sbmt = () => {
    let obj = {
      name,
      email
    }
    setUser(obj)
    console.log(user)
  }

  console.log(user)
  return (<>
    <h1>Cards Using Props</h1>
    {/* <input className='inp' onChange={(e) => setName(e.target.value)} placeholder='Name' />
    <input className='inp' onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
    <Button onClick={sbmt} className='btn' value='Custom Value' />
    <Button value='cusd' className='btn' /> */}
    <div id="pname">

      <div className="clname">
        <Heading h={products[0].name} />
        <hr />
        <Detail h={products[0].detail} />
        <hr />
        <Price h={products[0].price} />

      </div>
      <div className="clname">
        <Heading h={products[1].name} />
        <hr />
        <Detail h={products[1].detail} />
        <hr />
        <Price h={products[1].price} />

      </div>
      <div className="clname">
        <Heading h={products[2].name} />
        <hr />
        <Detail h={products[2].detail} />
        <hr />
        <Price h={products[2].price} />

      </div>
      <div className="clname">
        <Heading h={products[3].name} />
        <hr />
        <Detail h={products[3].detail} />
        <hr />
        <Price h={products[3].price} />

      </div>
    </div>

    {/* <button style={{ color: 'white', fontSize: '10px', backgroundColor: 'black' }} onClick={sbmt}>Submit</button> */}
    {/* <Button buttonText='Login' /> */}
    {/* <Button buttonText='Register' /> */}
    {/* <Button buttonText='Submit' /> */}
    {/* <Button buttonText='Apply' /> */}
  </>
  );
}

export default App;