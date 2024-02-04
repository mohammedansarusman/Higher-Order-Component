import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Card,{withPromotedLabel} from "./Card";
import student from "./studentData";

const App = () =>{
    const PromotedCard = withPromotedLabel(Card);
        return(
        <div>
            <Header />
            {student.map(
                (res)=>{
                    return (
                        res.promoted ? <PromotedCard key = {Math.random()} data={res}/> : <Card key = {Math.random()} data={res}></Card>
                        
                    )
                }
            )}
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

