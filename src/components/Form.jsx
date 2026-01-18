export const Form = ({
    title = "",
    initialValues = {},
    placeholders = {},
    onSubmit
}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{title}</h2>

            <div className="mb-3">
                <label htmlFor="inputName" className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    defaultValue={initialValues.name}
                    placeholder={placeholders.name || "Escribe tu nombre"}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Correo electrónico</label>
                <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    defaultValue={initialValues.email}
                    placeholder={placeholders.email || "ejemplo@correo.com"}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">Teléfono</label>
                <input
                    type="tel"
                    className="form-control"
                    id="inputPhone"
                    defaultValue={initialValues.phone}
                    placeholder={placeholders.phone || "Número de teléfono"}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="inputAddress" className="form-label">Dirección</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    defaultValue={initialValues.address}
                    placeholder={placeholders.address || "Tu dirección"}
                />
            </div>

            <button type="submit" className="btn btn-primary w-100">Enviar</button>
        </form>
    );
};

