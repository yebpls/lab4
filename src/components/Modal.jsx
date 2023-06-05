import React from "react"
import "./modal.css"
function Modal({ setIsOpen, film }) {
  return (
    <div
      className="modal-show"
      onClick={() => {
        setIsOpen(false)
      }}
    >
      <div
        id="modal1"
        className="modal"
        style={{ display: "block", top: "35%" }}
      >
        <div className="modal-content">
          <h4>Video for {film.title}</h4>
          <p>
            <iframe
              width="100%"
              height="400px"
              src={film.clip}
              title={film.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameborder="0"
              allowFullScreen
            />
          </p>
        </div>
      </div>
      <div className="modal-footer">
        <a className="modal-close red-text">Close</a>
      </div>
    </div>
  )
}

export default Modal
