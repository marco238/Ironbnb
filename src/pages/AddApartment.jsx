import { useState } from "react";
import { addApartment } from "../services/ApartmentServices";
import { useNavigate } from "react-router-dom";

function AddApartment() {
  const navigate = useNavigate();
  const [apartment, setApartment] = useState({
    title: "",
    pricePerDay: 0,
    img: ""
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setApartment({
      ...apartment,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newApartment = Object.entries(apartment).reduce((acc, current) => {
      const [key, value] = current
      if (value) {
        return {
          ...acc,
          [key]: value
        }
      }
      return acc
    }, {})

    addApartment(newApartment)
      .then(() => {
        navigate('/')
      })
      .catch(err => console.error(err))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" name="title" id="title" value={apartment.title} onChange={handleInputChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="pricePerDay" className="form-label">Price per day</label>
        <input type="number" min={0} className="form-control" name="pricePerDay" id="pricePerDay" value={apartment.pricePerDay} onChange={handleInputChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="img" className="form-label">Image</label>
        <input type="string" className="form-control" name="img" id="img" value={apartment.img} aria-describedby="imageHelp" onChange={handleInputChange} />
        <div id="imageHelp" className="form-text">Enter URL like: &apos;https://placehold.co/400x400&apos;</div>
      </div>
      <button type="submit" className="btn btn-primary">Add apartment</button>
    </form>
  )
}

export default AddApartment;
