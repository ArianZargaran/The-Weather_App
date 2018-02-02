import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';


class WeatherList extends Component {
  render(){
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>            
            <th>Humidity (%)</th>                        
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map((this.renderWeather))}
        </tbody>
      </table>
    )
  }

  renderWeather(cityData) {
    if (!cityData) {
      return (
        <tr key={cityData}>
          <td>N/A</td>
        </tr>
      )
    }
    
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp);
    const conversion = temps.map((kelvin) => kelvin - 273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;


    return (
      <tr key={name}>
          <td><GoogleMap lon={lon} lat={lat} /></td>
          <td><Chart data={conversion} color='orange' units='°C'/></td>
          <td><Chart data={pressures} color='blue' units='hPa'/></td>
          <td><Chart data={humidities} color='green' units='%'/></td>
      </tr>
    )
  }

}

function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);