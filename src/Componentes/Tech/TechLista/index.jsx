import { technologies } from "../../../data/technologies"
import { TechCard } from "./TechCard"

export const TechLista = () => {
    return(
        <ul className="row listaTech">
            {technologies.map(card =>(
                <TechCard key={card.name} card={card}/>
            ))}
        </ul>
    )
}