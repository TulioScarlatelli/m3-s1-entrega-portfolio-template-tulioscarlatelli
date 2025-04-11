import { Tech } from "../Tech"
import { BotaoBanner } from "./BotaoBanner"

export const Banner = () => {
    return (
        <div className="background-2 container bordaTop">
            <div className="banner colum config-2">
                <div className="row config-1 blocoPerfil">
                    <img src="./src/assets/ImagemPerfil.svg" alt="Imagem de Perfil" className="imagem"/>
                    <h2 className="text-branco">Hello, mu name is Anna</h2>
                </div>
                <div>
                    <p className="title-1">I <span className="roxo">love</span> creating and <span className="roxo">developing</span> projects</p>
                </div>
                <p className="text">Discover here in this environment, created especially for you, all my projects and technologies</p>
                <div className="row blocoBotaoBanner config-1">
                    <BotaoBanner />
                    <img src="./src/assets/git-icon.png" alt="Git Hub Icon" className="imagemBotaoBanner"/>
                </div>
                <div>
                    <Tech />
                </div>
            </div>
        </div>
    )
}