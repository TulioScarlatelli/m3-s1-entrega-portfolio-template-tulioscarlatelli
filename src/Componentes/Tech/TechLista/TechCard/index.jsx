export const TechCard = ({card}) => {
    return (
        <li>
            <img src={card.img} alt={card.name} />
        </li>
    )
}