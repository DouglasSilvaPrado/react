function Contato() {
    return ( 
        <>
            <div className="container" id="contato">
                <h2 className="primary-color display-6 text-center fw-bold my-5">
                    Entre em contato
                </h2>
                <div>
                    <form action="https://formsubmit.co/douglassilvadaprado@gmail.com" method="POST">
                        <div className="form-group w-50 mx-auto">
                            <input
                            type="text"
                            className="form-control my-3"
                            placeholder="Digite seu nome"
                            name="Nome"
                            required=""
                            />
                            <input
                            type="text"
                            className="form-control my-3"
                            placeholder="Digite seu Email"
                            name="Email"
                            required=""
                            />

                            <textarea placeholder="Digite sua Mensagem" rows="4" cols="50" name="mensagem" required="" className="form-control my-3"></textarea>
                            <input type = "hidden" name = "_captcha" value = "false"/>
                            <input type = "hidden" name = "_autoresponse" value = "Mensagem enviada!"/>
                            <input type = "hidden" name = "_next" value = "http://localhost:3000/"/>
                            <button className="btn btn-primary form-control my-3">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container my-5">

            <div className="text-center my-5">
                <span className="primary-color">Fale Conosco</span>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
                <div className="col">
                <div className="card h-100">
                    <i className="bi bi-whatsapp primary-color fs-1"></i>
                    <div className="card-body">
                    <p className="card-text"> (21) 99999-9999 </p>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card h-100">
                    <i className="bi-geo-alt primary-color fs-1"></i>
                    <div className="card-body">
                    <p className="card-text">Av. Automóvel Clube, 1838 - Vilar dos Teles, São João de Meriti </p>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card h-100">
                    <i className="bi-send primary-color fs-1"></i>
                    <div className="card-body">
                    <p className="card-text">Agencia@gmail.com</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
     );
}

export default Contato;