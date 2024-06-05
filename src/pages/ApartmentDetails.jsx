import { useEffect, useState } from "react";
import { getApartment } from "../services/ApartmentServices";
import { Link, useParams } from "react-router-dom";
import { parseDate } from "../../public/utils";

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
  }, [id])

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }

  return (
    <>
      <img src={apartment.img} className="img-thumbnail mb-5" width={200} alt={apartment.img}></img>
      <div className="card text-center">
        <div className="card-header">
          Details
        </div>
        <div className="card-body">
          <h5 className="card-title">{apartment.title}</h5>
          <p className="card-text">Price per day: {apartment.pricePerDay} €</p>
          <Link to="/" className="btn btn-primary">Go back</Link>
        </div>
        <div className="card-footer text-body-secondary">
          Updated: {parseDate(apartment.updatedAt)}
        </div>
      </div>
    </>
  )
}

export default ApartmentDetails;
