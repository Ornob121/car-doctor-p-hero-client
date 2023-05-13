import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

//
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const url = `https://car-doctor-p-hero-server.vercel.app/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookings(data);
        } else {
          logOut()
            .then(() => {
              localStorage.removeItem("car-access-token");
            })
            .catch((err) => {
              console.log(err.message);
            });
          navigate("/");
        }
      });
  }, [url]);
  return (
    <div>
      Booking:{bookings.length}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Service Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Date</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                bookings={bookings}
                setBookings={setBookings}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
