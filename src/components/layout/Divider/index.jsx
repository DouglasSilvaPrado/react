function Divider() {
    return ( 
        <>
            <div className="container" id="destino">
                <h2 className="primary-color display-6 text-center fw-bold my-5">
                    Qual seu próximo destino?
                </h2>
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-xl-4 my-auto">
                    <h3 className="secondary-color h1">
                        Vamos fazer um tour
                        <span className="primary-color">Descubra a beleza</span>
                    </h3>
                    <form name="frmContato" action="insert">
                        <div className="form-group">
                        <input
                            type="text"
                            name="origem"
                            className="form-control my-3"
                            placeholder="De Onde"
                            required=""
                        />
                        <input
                            type="text"
                            name="destino"
                            className="form-control my-3"
                            placeholder="Para Onde"
                            required=""
                        />
                        <input type="date" name="data_ida" className="form-control my-3" required="" />
                        <input type="date" name="data_volta" className="form-control my-3" required=""/>
                        <input type="button" className="btn btn-primary my-3 form-control" value="Agendar" onclick="validar()"/>
                        <a href="Destino.html"><input type="button" className="btn btn-primary my-3 form-control" value="Melhores Destino"/></a>
                        </div>
                    </form>
                    </div>

                    <div className="col-sm-12 col-md-7 col-xl-8 my-auto">
                    <img
                        src="img/destino.png"
                        className="img-fluid"
                        alt="pessoa sentanda no pier olhando a vista"
                    />
                    </div>
                </div>
            </div>
        </>
     );
}

export default Divider;