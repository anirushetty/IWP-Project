import './SearchItem.css'

import React from 'react';

const SearchItem = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="searchItem">
          <img src={item.image} alt="" className="SearchItemImg" />
          <div className="siDesc">
            <h1 className="siTitle">{item.title}</h1>
            <span className="siDistance">{item.distance}</span>
            <span className="siTaxi">{item.taxi}</span>
            <span className="siSubtitle">{item.subtitle}</span>
            <span className="siFeatures">{item.features}</span>
            <span className="siCancel">{item.cancel}</span>
            <span className="siCancelSubtitle">{item.cancelSubtitle}</span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>{item.ratingLabel}</span>
              <button>{item.rating}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">{item.price}</span>
              <span className="siGst">{item.gst}</span>
              <button className="siButton">{item.buttonText}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SearchItemList = () => {
    // Sample data for search items
    const items = [
      {
        image: "paris.jpg",
        title: "Grand Hotel du Palais Royal",
        distance: "600m from centre",
        taxi: "Free Airport Taxi",
        subtitle: "Studio Apartment with air Conditioning",
        features: "Entire Studio . 2 bathroom . 2 bed",
        cancel: "Free Cancellation",
        cancelSubtitle: "You can cancel later! So lock in this great deal today",
        ratingLabel: "Excellent",
        rating: "9.1",
        price: "18949/-",
        gst: "Inclusive of GST",
        buttonText: "Check Availability"
      },
      {
        image: "siu.jpg",
        title: "Four Seasons Hotel George V",
        distance: "200m from centre",
        taxi: "Free Airport Taxi",
        subtitle: "Studio Apartment with air Conditioning",
        features: "Entire Studio . 2 bathroom . 2 bed",
        cancel: "Free Cancellation",
        cancelSubtitle: "You can cancel later! So lock in this great deal today",
        ratingLabel: "Excellent",
        rating: "9.1",
        price: "18949/-",
        gst: "Inclusive of GST",
        buttonText: "Check Availability"
      },
      {
        image: "paris.jpg",
        title: "Grand Set",
        distance: "600m from centre",
        taxi: "Free Airport Taxi",
        subtitle: "Studio Apartment with air Conditioning",
        features: "Entire Studio . 2 bathroom . 2 bed",
        cancel: "Free Cancellation",
        cancelSubtitle: "You can cancel later! So lock in this great deal today",
        ratingLabel: "Excellent",
        rating: "9.1",
        price: "18949/-",
        gst: "Inclusive of GST",
        buttonText: "Check Availability"
      },
      {
        image: "paris.jpg",
        title: "Grand Set",
        distance: "600m from centre",
        taxi: "Free Airport Taxi",
        subtitle: "Studio Apartment with air Conditioning",
        features: "Entire Studio . 2 bathroom . 2 bed",
        cancel: "Free Cancellation",
        cancelSubtitle: "You can cancel later! So lock in this great deal today",
        ratingLabel: "Excellent",
        rating: "9.1",
        price: "18949/-",
        gst: "Inclusive of GST",
        buttonText: "Check Availability"
      },
      {
        image: "paris.jpg",
        title: "Grand Set",
        distance: "600m from centre",
        taxi: "Free Airport Taxi",
        subtitle: "Studio Apartment with air Conditioning",
        features: "Entire Studio . 2 bathroom . 2 bed",
        cancel: "Free Cancellation",
        cancelSubtitle: "You can cancel later! So lock in this great deal today",
        ratingLabel: "Excellent",
        rating: "9.1",
        price: "18949/-",
        gst: "Inclusive of GST",
        buttonText: "Check Availability"
      },
      {
        image: "paris.jpg",
        title: "Grand Set",
        distance: "600m from centre",
        taxi: "Free Airport Taxi",
        subtitle: "Studio Apartment with air Conditioning",
        features: "Entire Studio . 2 bathroom . 2 bed",
        cancel: "Free Cancellation",
        cancelSubtitle: "You can cancel later! So lock in this great deal today",
        ratingLabel: "Excellent",
        rating: "9.1",
        price: "18949/-",
        gst: "Inclusive of GST",
        buttonText: "Check Availability"
      }
    ];
  
    return <SearchItem items={items} />; // Ensure that 'items' prop is passed
  };
  
export default SearchItemList;


