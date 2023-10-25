import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Section from './components/Section/Section.jsx'
import Profile from "./components/Profile/Profile.jsx"
import Paragraph from './components/Paragraph/Paragraph.jsx'
import Counter from './components/Counter/Counter.jsx'
import TextBox from './components/TextBox/TextBox.jsx'
import StateForm from './components/StateForm/StateForm.jsx'
import './index.css'
import StateProfile from './components/StateProfile/StateProfile.jsx'
import Counter2 from './components/Counter/Counter2/Counter2.jsx'
import UseEffectCounter from './useEffect/components/Counter/Counter.jsx'
import Interval from './useEffect/components/Interval/Interval.jsx'
import Home from './useEffect/components/Home/Home.jsx'
import Pokemon from './useEffect/components/Pokemon/Pokemon.jsx'
import { Video, GuessNumber, RefForm } from './useRef/index.js'
import UseRefInput from './useRef/components/Input/UseRefInput.jsx'
import { ReducerCounter, ReducerCounter2, ReducerForm } from "./useReducer/index.js"

function clickHandler() {

  console.log("It worked!! oh Geeeeez")
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* useReducer */}
    <ReducerForm />

    <ReducerCounter2 />

    <ReducerCounter />

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
