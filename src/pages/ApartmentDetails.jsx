import { useEffect, useState } from "react";
import { getApartment } from "../services/ApartmentServices";
import { useParams } from "react-router-dom";

function ApartmentDetails() {
  const { id } = useParams()
  const [apartment, setApartment] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getApartment(id)
      .then((apt) => {
        setApartment(apt)
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }

  return (
    <div className="card text-center">
      <div className="card-header">
        Details
      </div>
      <div className="card-body">
        <h5 className="card-title">{apartment.title}</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
      <div className="card-footer text-body-secondary">
        2 days ago
      </div>
    </div>
  )
}

export default ApartmentDetails;
