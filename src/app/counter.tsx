"use client"

import { useState } from "react"
type CountType={
    message:string
}

export default function Counter({ message }:CountType) {
    const [user, setUser] = useState("");
    const [count, setCount] = useState("");
    const [finalValue, setFinalValue] = useState(0)
    const addHandler = () => {
        setFinalValue(Number(count) + Number(finalValue))
    }
    const minusHandler = () => {
        setFinalValue(Number(finalValue) - Number(count))
    }
    const resetHandler = () => {
        setFinalValue(count)
    }
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{
                    padding: "30px",
                    borderRadius: "10px",
                    backgroundColor: "#ececed"
                }}>


                    <h2>{message} {user}</h2>

                    <label htmlFor="Name">
                        <input type="text"
                            placeholder="Enter your name..."
                            value={user}
                            onChange={(event) => {
                                setUser(event.target.value)
                            }}
                        />
                    </label>
                    <br /><br />
                    <label htmlFor="">
                        <input type="text"
                            placeholder="Enter a number..."
                            value={count}
                            onChange={(event) => {
                                setCount(event.target.value)
                            }}

                        />
                    </label>
                    <h1 style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>{finalValue}</h1>
                    <br />
                    <div style={{
                        display: "flex",
                        width: "200px",
                        justifyContent: "center",
                        gap: "15px"
                    }}>
                        <button onClick={addHandler} style={{
                            borderRadius: "30px",
                            color: "white",
                            background: "red",
                            width: "90px",
                            height: "30px"
                        }}>Add</button>
                        <button onClick={minusHandler}
                            style={{
                                borderRadius: "30px",
                                color: "white",
                                background: "blue",
                                width: "90px",
                                height: "30px"
                            }}>Subtract</button>
                        <button onClick={resetHandler}
                            style={{
                                borderRadius: "30px",
                                color: "white",
                                background: "#349d34",
                                width: "90px",
                                height: "30px"
                            }}>Reset</button>
                    </div>

                </div>
            </div>
        </>
    )
}