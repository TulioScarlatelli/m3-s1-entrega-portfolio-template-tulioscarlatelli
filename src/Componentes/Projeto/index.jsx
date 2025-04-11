import { ProjetoLista } from "./ProjetoLista"

export const Projeto = () => {
    return (
        <div className="background-1 container bordaBranca">
            <div className="primeiraParte">
                <h3 className="title-3">
                    My Projects
                </h3>
                <p  className="text-menor">
                    Projects created at <span className="text-vermelho">Kenzie Academy</span>
                </p>
            </div>
            <ProjetoLista />
        </div>
    )
}