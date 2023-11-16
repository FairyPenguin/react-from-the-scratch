import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
//Other Imports
import Button from './ConditionalRendering/excercise/1/Button'
import ButtonWithState from './ConditionalRendering/excercise/2/ButtonWithState'
import Auth from './ConditionalRendering/excercise/3/Auth'
import { PokemonErrorHandle, PokemonCaching, PokemonPagination } from "./Data Fetching/index"
// import Names from './ConditionalRendering/excercise/4/Names'
import Pokemon from "./useEffect/components/Pokemon/Pokemon"

import { Home, Home2, Home3 } from "./Custom Hooks/index"


// function clickHandler() {

//   console.log("It worked!! oh Geeeeez")
// }


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    {/* Custom hooks */}
    {/* <Home /> */}
    {/* <Home2 /> */}
    <Home3 />

    {/* Fetching */}

    {/* <PokemonPagination /> */}

    {/* <PokemonCaching /> */}

    {/* <PokemonErrorHandle /> */}

    {/* <Pokemon /> */}

    {/* Conditional Rendering */}

    {/* <Button loading={true} /> */}

    {/* <Auth /> */}

    {/* <Names /> */}

    {/* <ButtonWithState loading={false} /> */}

    {/* <Conditions /> */}

    {/* useContext */}
    {/* <Parent /> */}

    {/* <Parent /> */}
    {/* <Child /> */}

    {/* useReducer */}
    {/* <ReducerForm /> */}

    {/* <ReducerCounter2 /> */}

    {/* <ReducerCounter /> */}

    {/* <Reduceit /> */}
    {/* use Ref Excersises */}

    {/* <RefForm /> */}

    {/* <GuessNumber /> */}
    {/* <Video /> */}
    {/* <UseRefInput /> */}

    {/* use Effect Excersises */}
    {/* <Pokemon /> */}

    {/* <Home /> */}

    {/* <Interval />

    <UseEffectCounter /> */}





    {/* use State Excersises */}

    {/* <StateProfile />
    <StateForm />
    <Counter />
    <Counter2 />
    <TextBox /> */}

    {/* <App /> */}
    {/* <Paragraph>
      <h1>This is the P Children</h1>
    </Paragraph>
    <Profile
      profileTitle={"Profile"}
      cardTitle={"Card"}
      ButtonText={"Button"}
      clickHandler={clickHandler}
    /> */}
    {/* <Section /> */}
  </React.StrictMode>,
)
