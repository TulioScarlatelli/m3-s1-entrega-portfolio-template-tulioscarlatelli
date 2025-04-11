export const Footer = () => {
    return (
        <div className="background-1 container">
            <div className="row config-1 blocoFooter">
                <div className="row config-1 footer-1">
                    <img src="./src/assets/ImagemPerfil.svg" alt="Imagem Perfil" className="imagem" />
                    <section>
                        <h3 className="title-3">
                            Thank you!
                        </h3>
                        <p className="text">
                            Follow me on my social networks and let's talk
                        </p>
                    </section>
                </div>
                <div className="row config-1 footer-2">
                    <div className="fundoIcon-1 center">
                        <img src="./src/assets/facebookIcon.png" alt="Facebook Icon" />
                    </div>
                    <div className="fundoIcon-2 center">
                        <img src="./src/assets/telegramIcon.png" alt="Telegram Icon" />
                    </div>
                    <div className="fundoIcon-3 center">
                        <img src="./src/assets/linkedinIcon.png" alt="Linkedin Icon" />
                    </div>
                </div>
            </div >
        </div >
    )
}