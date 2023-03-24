import React from "react"
import{Hello} from "./hello"
import { Day } from "./day"

export class App extends React.Component{
    render(){
        return (
        <div>
            <h1><Hello/></h1>
           <p><Day/></p>
        </div>
        )
    }
}

