// import { useEffect, useState } from "react"
// import "./App.css"
// import FormRet1 from "./components/form2"

// function App() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const [emailDirty, setEmailDirty] = useState(false)
//   const [passwordDirty, setPasswordDirty] = useState(false)

//   const [emailError, setEmailError] = useState("You may enter Email")
//   const [passwordError, setPasswordError] = useState("You may enter Passowrd")

//   const [valid, setValid] = useState(false)
//   const [blur, setBlur] = useState(false)

//   const focus = (e) => {
//     setEmailDirty(false)
//     setPasswordDirty(false)
//   }
//   const onBlur = (e) => {
//     setBlur(true)
//   }

//   useEffect(() => {
//     if (emailDirty || passwordDirty) {
//       setValid(false)
//     } else {
//       setValid(true)
//     }
//   }, [emailDirty, passwordDirty])

//   const passwordHandler = (e) => {
//     setPassword(e.target.value)

//     if (e.target.value.length < 3 || e.target.value.length > 8) {
//       setPasswordDirty(true)
//       setPasswordError("no more then 8 less then 3")
//     } else {
//       setPasswordDirty(false)
//       setPasswordError("")
//     }

//     if (!e.target.value) {
//       setPasswordDirty(true)
//       setPasswordError("You may enter Passowrd")
//     }
//     console.log(emailDirty, passwordDirty)
//   }

//   const emailHandler = (e) => {
//     setEmail(e.target.value)

//     if (email.includes("@")) {
//       setEmailDirty(false)
//       setEmailError("")
//     } else {
//       setEmailError("You may enter Email")

//       setEmailDirty(true)
//     }

//     console.log(emailDirty, passwordDirty)
//   }

//   return (
//     <div className="App">
//       <form className="form">
//         <h1 className="h1">Log In</h1>
//         {blur && emailError && <div style={{ color: "red" }}>{emailError}</div>}
//         <input
//           value={email}
//           className="input"
//           onFocus={focus}
//           onBlur={onBlur}
//           onChange={(e) => emailHandler(e)}
//           type="email"
//           placeholder="ewww..."
//           name="email"></input>
//         {passwordError && blur && (
//           <div style={{ color: "red" }}>{passwordError}</div>
//         )}
//         <input
//           value={password}
//           className="input"
//           onFocus={focus}
//           onBlur={onBlur}
//           onChange={(e) => passwordHandler(e)}
//           type="password"
//           placeholder="ewww..."
//           name="password"></input>
//         <div className="btn-div">
//           <button className="btn" disabled={!valid} type="submit">
//             submit
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }
// export default App

//   useEffect(() => {
//     if (passwordDirty || emailDirty) {
//       setValid(false)
//     } else {
//       setValid(true)
//     }
//   }, [passwordDirty, emailDirty])

//   const emailHandler = (e) => {
//     SetEmail(e.target.value)
//   }

//   const passwordHandler = (e) => {
//     setPassword(e.target.value)

//     if (e.target.value.length > 5 || e.target.value.length < 3) {
//       setPasswordError("не меньше 3 и не больше 5")
//     }
//     if (!e.target.value) {
//       setPasswordError("Введи пароль детка")
//     }
//   }

//   const blur = (e) => {
//     switch (e.target.name) {
//       case "num":
//         setPasswordDirty(true)
//         break
//       case "text":
//         setEmailDirty(true)
//         break
//       default:
//     }
//   }

//   const focus = (e) => {
//     switch (e.target.name) {
//       case "num":
//         setPasswordDirty(false)
//         setEmailDirty(false)
//         break
//       case "text":
//         setEmailDirty(false)
//         setPasswordDirty(false)
//         break
//       default:
//     }
//   }

//   return (
//     <div className="App">
//       <form className="form" id="form">
//         <h1>Log In</h1>
//         {emailDirty && emailError && (
//           <div style={{ color: "red" }}>{emailError}</div>
//         )}
//         <input
//           style={{ position: "relative", border: "1px solid" }}
//           onFocus={(e) => focus(e)}
//           onBlur={(e) => blur(e)}
//           onChange={(e) => emailHandler(e)}
//           value={email}
//           name="text"
//           placeholder="QWE"></input>

//         {passwordDirty && passwordError && (
//           <div style={{ color: "red" }}>{passwordError}</div>
//         )}

//         <input
//           onChange={passwordHandler}
//           onFocus={(e) => focus(e)}
//           onBlur={(e) => blur(e)}
//           value={password}
//           name="num"
//           placeholder="123"></input>
//       </form>
//       <button
//         disabled={!valid}
//         type="submit"
//         style={{ fontSize: "1.2em", letterSpacing: "5px" }}>
//         SUBMIT
//       </button>
//     </div>
//   )
// }

import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [emailError, setEmailError] = useState([])
  const [passwordError, setPasswordError] = useState([])

  const [valid, setValid] = useState(false)
  const [blur, setBlur] = useState(false)

  const passwordChecker = () => {
    const errors = []

    if (password.length < 3 || password.length > 8) {
      errors.push("No more then 8 less then 3")
    }

    if (!password) {
      errors.push("You may enter Passowrd")
    }

    setPasswordError(errors)
  }

  const emailChecker = (e) => {
    const errors = []

    if (!email.includes("@")) {
      errors.push("ggd")
    }

    setEmailError(errors)
  }

  const summaryErrors = () => {
    return !emailError.length && !passwordError.length
  }

  const submitHandle = () => {
    passwordChecker()
    emailChecker()

    if (!summaryErrors()) {
      console.log("ggd")
    }
  }

  return (
    <div className="App">
      <form className="form">
        <h1 className="h1">Log In</h1>

        {emailError.map((err) => {
          return (
            <div key={err} style={{ color: "red" }}>
              {err}
            </div>
          )
        })}

        {passwordError.map((err) => {
          return (
            <div key={err} style={{ color: "red" }}>
              {err}
            </div>
          )
        })}

        <input
          value={email}
          className="input"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="ewww..."
          name="email"
        />
        <input
          value={password}
          className="input"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="ewww..."
          name="password"
        />
        <div className="btn-div">
          <button
            className="btn"
            onClick={submitHandle}
            disabled={!summaryErrors()}
            type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default App
