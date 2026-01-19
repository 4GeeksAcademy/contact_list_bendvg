export const Form = ({
    title = "",
    initialValues = {},
    placeholders = {},
    onSubmit
}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: e.target.inputName.value,
            email: e.target.inputEmail.value,
            phone: e.target.inputPhone.value,
            address: e.target.inputAddress.value
        };

        onSubmit(data);
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
                    placeholder={placeholders.name}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Correo electrónico</label>
                <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    defaultValue={initialValues.email}
                    placeholder={placeholders.email}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">Teléfono</label>
                <input
                    type="tel"
                    className="form-control"
                    id="inputPhone"
                    defaultValue={initialValues.phone}
                    placeholder={placeholders.phone}
                    maxLength={9}
                    pattern="[0-9]{9}"
                />

            </div>

            <div className="mb-3">
                <label htmlFor="inputAddress" className="form-label">Dirección</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    defaultValue={initialValues.address}
                    placeholder={placeholders.address}
                />
            </div>

            <button type="submit" className="btn btn-primary w-100">Enviar</button>
        </form>
    );
};
