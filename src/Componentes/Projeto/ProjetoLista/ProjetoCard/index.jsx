export const ProjetoCard = ({project}) => {
    return(
        <li className="card">
            <h3 className="title-2">{project.name}</h3>
            <p  className="text">{project.description}</p>
        </li>
    )
}