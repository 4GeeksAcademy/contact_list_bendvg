export const ContactCard = ({ id, name, email, phone, address, image, onEdit, onDelete }) => {
  const defaultAvatar =
    "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg";

  return (
    <div className="card shadow-sm mb-3 w-100 p-3">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src={image || defaultAvatar}
            alt={name}
            className="rounded-circle"
            style={{
              width: "90px",
              height: "90px",
              objectFit: "cover",
              marginRight: "25px"
            }}
          />

          <div className="text-start">
            <h5 className="mb-1">{name}</h5>
            <p className="mb-1"><i className="fa-solid fa-phone me-2"></i>{phone}</p>
            <p className="mb-1"><i className="fa-solid fa-envelope me-2"></i>{email}</p>
            <p className="mb-0"><i className="fa-solid fa-location-dot me-2"></i>{address}</p>
          </div>
        </div>

        <div>
          <button className="btn btn-outline-primary btn-sm me-2" onClick={onEdit}>
            <i className="fa-solid fa-pen"></i>
          </button>

          <button className="btn btn-outline-danger btn-sm" onClick={onDelete}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
