import React from 'react';
import { PlannerBackground } from '../Style';
import OriginPlanner from './OriginPlanner';
import DestinationPlanner from './DestinationPlanner';

const Planner = ({
  setPlaceOrigin,
  setPlaceDestination,
  onSubmit,
  page,
  onRedirect,
  clearDirections,
}) => {
  // if (page === 'route') {
  //   clearDirections();
  // }

  return (
    <PlannerBackground>
      <h2>Travel Planner</h2>
      <div className="planner__box">
        <div className="planner__box--inputbox">
          <OriginPlanner setPlaceOrigin={setPlaceOrigin} />
        </div>

        <div className="planner__box--inputbox">
          <DestinationPlanner setPlaceDestination={setPlaceDestination} />
        </div>
        <div className="planner__box--inputbtn">
          <button
            className="btn btn-primary"
            onClick={page === 'route' ? onSubmit : onRedirect}
          >
            <i className="fas fa-map-marked-alt"></i>
          </button>
        </div>
      </div>
    </PlannerBackground>
  );
};

export default Planner;
