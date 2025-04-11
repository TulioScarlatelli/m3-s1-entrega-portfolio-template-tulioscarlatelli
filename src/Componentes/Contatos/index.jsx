export const Contatos = () => {
    return (
        <div className="background-2 container">
            <div className="blocoContatos row config-1">
                <div>
                    <div>
                        <h3 className="title-2" >
                            Lets set up a conversation and <br/><span className="roxo">develop our creativity</span><br/> together ?
                        </h3>
                        <p className="text">
                            Advertise your brand organically within Dribbbles design inspiration feed.
                        </p>
                    </div>
                </div>
                <div  className="contatos colum config-2">
                    <div className="row contatoCard">
                        <div className="fundoSimbolo-verde center">
                            <img src='./src/assets/whatsapp-icon.png' alt="Wpp" />
                        </div>
                        <div className="cardContato">
                            <h3 className="title-4">
                                My phone
                            </h3>
                            <p className="text">
                                I'm available for a voice chat, let's about creativity together?
                            </p>
                            <p className="text-branco">
                                Call Now
                            </p>
                        </div>
                    </div>
                    <div className="row contatoCard">
                        <div className="fundoSimbolo-roxo center">
                            <img src="./src/assets/email.png" alt="Email" />
                        </div>
                        <div className="cardContato">
                            <h3 className="title-4">
                                My email
                            </h3>
                            <p className="text">
                                Send me an email reporting feedbacks, suggestions and ideas
                            </p>
                            <p className="text-branco">
                                Send email now
                            </p>
                        </div>
                    </div>
                    <div className="row contatoCard">
                        <div className="fundoSimbolo-azul center">
                            <img src="./src/assets/linkedin-icon.png" alt="linkedin" />
                        </div>
                        <div className="cardContato">
                            <h3 className="title-4">
                                My LinkedIn
                            </h3>
                            <p className="text">
                                We can create more constant interactions as well as a sharing network
                            </p>
                            <p className="text-branco">
                                Go to Telegram Now
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}