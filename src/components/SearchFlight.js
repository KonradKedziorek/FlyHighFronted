import React from 'react'

import SearchFlightServices from '../services/SearchFlightServices'

class SearchFlight extends React.Component {
    constructor(){
      super();
      this.state = {
        flights:[]
      }
    }

    componentDidMount(){
      SearchFlightServices.getFly().then((response) => {
          this.setState({flies: response.data})
      });
    }

    render(){
        return(
          <div>
            <h1 className='text-center'>Flight List</h1>
            <table className='table table-striped'>
              <thead>
                <tr >
                  <td>Flight Id</td>
                  <td>Flight Date</td>
                  <td>Departure airport</td>
                  <td>Time od departure</td>
                  <td>Arrival airport</td>
                  <td>Time of arrival</td>

                </tr>
              </thead>
              <tbody>
                {
                  this.state.flights.map(
                    flight =>
                    <tr key={flight.id}>
                      <td>{flight.id}</td>
                      <td>{flight.date}</td>
                      <td>{flight.departureAirport}</td>
                      <td>{flight.timeOfDeparutre}</td>
                      <td>{flight.arrivalAirport}</td>
                      <td>{flight.timeOfArrival}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        )
    }
}


export default SearchFlight;