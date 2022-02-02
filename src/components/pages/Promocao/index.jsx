function Promocao() {
    return ( 
        <>
            <div className="container"  id="promo">
                <h2 className="primary-color display-6 text-center fw-bold my-5">
                    Promoções para sua viagem
                </h2>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    <div className="col">
                    <div className="card h-100">
                        <img src="img/maldives.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">
                            Mermaid Beach Resort: A maneira mais alegre de passar suas
                            férias
                        </h5>
                        <p className="card-text">📍maldivas 📅 4 dias</p>
                        <p className="card-text"><strike>200</strike></p>
                        <p className="card-text primary-color h2">
                            $ 175 <span className="secondary-color fs-6">/por pessoa</span>
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        <img src="img/cinnamon.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">
                            Desfrute de um cruzeiro romântico no lado ensolarado da vida
                        </h5>
                        <p className="card-text">📍cinnamon 📅4 dias</p>
                        <p className="card-text"><strike>300</strike></p>
                        <p className="card-text primary-color h2">
                            $ 250 <span className="secondary-color fs-6">/por pessoa</span>
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        <img src="img/dhigu.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">
                            Mermaid Beach Resort: A maneira mais alegre de passar suas
                            férias
                        </h5>
                        <p className="card-text">📍maldivas 📅4 dias</p>
                        <p className="card-text"><strike>200</strike></p>
                        <p className="card-text primary-color h2">
                            $ 175 <span className="secondary-color fs-6">/por pessoa</span>
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        <img src="img/rio.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Rio de Janeiro</h5>
                        <p className="card-text">📅18 dias</p>
                        <p className="card-text"><strike>500</strike></p>
                        <p className="card-text primary-color h2">
                            R$ 474 <span className="secondary-color fs-6">/por pessoa</span>
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        <img src="img/Florianopolis.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Florianópolis</h5>
                        <p className="card-text">📅20 dias</p>
                        <p className="card-text"><strike>850</strike></p>
                        <p className="card-text primary-color h2">
                            R$ 700 <span className="secondary-color fs-6">/por pessoa</span>
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        <img src="img/Fortaleza.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Fortaleza</h5>
                        <p className="card-text">📅8 dias</p>
                        <p className="card-text"><strike>675</strike></p>
                        <p className="card-text primary-color h2">
                            R$ 600<span className="secondary-color fs-6">/por pessoa</span>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Promocao;