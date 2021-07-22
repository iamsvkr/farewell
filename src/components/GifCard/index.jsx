import { useState } from "react"
import penguin from "../gifs/penguin.gif"
import OptionTile from "./OptionTile"

export default function GIFCard({ rightAnswer }) {

    const [isCorrect, setIsCorrect] = useState(false);

    const handler = () => {
        setIsCorrect(true);
    }

    return (
        <div className="container-gif">
            <div className="">
                <img src={penguin} alt="" height="500px" />
            </div>
            {
                !isCorrect ?
                <div className="options">
                    <OptionTile rightAnswer={rightAnswer} name="shivam" handler={handler} />
                    <OptionTile rightAnswer={rightAnswer} name="manish" handler={handler} />
                    <OptionTile rightAnswer={rightAnswer} name="pooja" handler={handler} />
                    <OptionTile rightAnswer={rightAnswer} name="rohit raj" handler={handler} />
                    <OptionTile rightAnswer={rightAnswer} name="amit" handler={handler} />
                    <OptionTile rightAnswer={rightAnswer} name="shivam" handler={handler} />
                </div> :
                <div className="card-container">

                </div>
            }
        </div>
    )
}
