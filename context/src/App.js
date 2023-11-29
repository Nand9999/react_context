import React from 'react';
import Provider from './provider';
import Context from './context';


const App = () =>{

  return (
    <>
    <div>
      <h2>Context API Ex:2</h2>
      <Provider>
        <Child1 />
      </Provider>
    </div>
    </>
  )
}

const Child1 =() =>{
  return <GrandChild1 />
}

const GrandChild1 =() => {
  return <GreatGrandChild1 />
}

// consume provider in great grand child1
const GreatGrandChild1 =()=>{

  return (
    <Context.Consumer>
      {
        (context) => (
          <>
          <h4>Actually consuming</h4>
          <p>Mission Name : {context.data.mname}</p>
          <p>Accept : {context.data.accept}</p>
          <button onClick={context.isMissionAccepted}>Change Accept</button>
          
          </>
        )

        
      }

    </Context.Consumer>

  )

}

export default App;