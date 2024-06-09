import { useEffect, useState } from "react";
import { addApartment, editApartment, getApartment } from "../services/ApartmentServices";
import { useNavigate, useParams } from "react-router-dom";

function ApartmentForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apartment, setApartment] = useState({
    title: "",
    pricePerDay: 0,
    img: ""
  })

  useEffect(() => {
    if (id) {
      getApartment(id)
        .then((apt) => {
          setApartment(apt)
        })
        .catch((e) => console.log(e))
    }
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setApartment({
      ...apartment,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newApartment = { ...apartment }
    if (!newApartment.img) {
      delete newApartment.img
    }

    if (id) {
      editApartment(id, newApartment)
        .then((editedApt) => {
          navigate(`/apartments/${editedApt._id}`)
        })
        .catch(err => console.error(err))

      return
    }

    addApartment(newApartment)
      .then(() => {
        navigate('/')
      })
      .catch(err => console.error(err))
  }

  return (
    <>
      <h1 className="mb-5">{id ? 'Edit apartment' : 'Add apartment'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" name="title" id="title" value={apartment.title} onChange={handleInputChange} required placeholder="Add a title..." />
        </div>
        <div className="mb-3">
          <label htmlFor="pricePerDay" className="form-label">Price per day</label>
          <input type="number" min={0} className="form-control" name="pricePerDay" id="pricePerDay" value={apartment.pricePerDay} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">Image</label>
          <input type="string" className="form-control" name="img" id="img" value={apartment.img} aria-describedby="imageHelp" onChange={handleInputChange} placeholder="Add an image URL..." />
          <div id="imageHelp" className="form-text">Enter URL like: &apos;https://placehold.co/400x400&apos;</div>
        </div>
        <button type="submit" className="btn btn-primary mt-5">{id ? 'Edit apartment' : 'Add apartment'}</button>
      </form>
    </>
  )
}

export default ApartmentForm;
