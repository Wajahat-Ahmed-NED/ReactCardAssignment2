import { useState } from 'react';
import './App.css';
import { Button, Heading, Detail, Price } from './button';
import logo from './logo.svg'

function App() {
 

  let products = [
    {
      name: "Knife",
      img:"data:image/jpeg;base64,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",
      detail: "kdjflkasdfnlkasdk",
      price: 20
    },
    {
      name: "Shoes",
      detail: "kdjflkasdfnlkasdk",
      price: 20
    },
    {
      name: "Shirt",
      detail: "kdjflkasdfnlkasdk",
      price: 20
    },
    {
      name: "Jeans Pant",
      detail: "kdjflkasdfnlkasdk",
      price: 20
    }
  ]

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