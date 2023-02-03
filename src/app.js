import React from "react"
import{Hello} from "./hello"

export class App extends React.Component{
    render(){
        return (
        <div>
            <h1><Hello/></h1>
            <p>What a beautiful day</p>
        </div>
        )
    }
}

