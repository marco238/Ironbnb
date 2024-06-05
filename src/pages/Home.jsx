import { useState, useEffect } from "react";
import { listApartments } from "../services/ApartmentServices";
import { Link } from "react-router-dom";

function Home() {
  const [apartments, setApartments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    listApartments()
      .then((apartments) => {
        setApartments(apartments)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const parseDate = (date) => { // "2024-06-03T19:00:52.817Z"
    const dateStr = date.split('T')[0] // "2024-06-03" ---> ["2024", "06", "03"]
    const [year, month, day] = dateStr.split('-')

    return `${day}-${month}-${year}`
  }

  return (
    <>
      <h1>Home</h1>

      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {apartments.map((apt) => (
            <div className="col" key={apt._id}>
              <div className="card h-100">
                <img src={apt.img} className="card-img-top" alt={apt.img} />
                <div className="card-body">
                  <h5 className="card-title">{apt.title}</h5>
                  <p className="card-text">Price per day: {apt.pricePerDay} €</p>
                  <Link to={`/apartments/${apt._id}`}>See details</Link>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">Updated: {parseDate(apt.updatedAt)}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Home;