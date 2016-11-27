const React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">It is {temp}&#x2103; in {location}.</h3>
  )
};

module.exports = WeatherMessage;
