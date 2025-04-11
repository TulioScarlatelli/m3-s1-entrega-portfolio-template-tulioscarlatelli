import { projects } from "../../../data/projects"
import { ProjetoCard } from "./ProjetoCard"

export const ProjetoLista = () => {
    return(
        <ul className="segundaParte">
            {projects.map(project => (
                <ProjetoCard key={project.name} project={project}/>
            ))}
        </ul>
    )
}