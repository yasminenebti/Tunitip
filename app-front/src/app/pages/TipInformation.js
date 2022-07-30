import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getTips } from "../actions/tip.actions";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import BathLogo from "../assets/bath-solid.svg";
import BedLogo from "../assets/bed-solid.svg";
import RoomLogo from "../assets/door-open-solid.svg";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function TipInformation({ tipState, getTips }) {
  const { id } = useParams();
  useEffect(() => {
    getTips(5);
  }, [getTips]);

  return (
    <div>
      {tipState.tips?.map((tip) => {
        return (
          tip._id === id && (
            <div className="">
              <div className="p-10 p flex justify-center items-center  rounded-xl    ">
                <img
                  src={tip.image}
                  alt=""
                  className="  rounded-xl  h-96 w-96  hover:shadow-xl"
                />
                <div className="bg-yellow rounded-r-xl h-full w-96 px-7 pb-4">
                  <div className=" font-bold pt-5 capitalize ">{tip.name}</div>
                  <div className=" text-sm pt-9 text-grayDark">
                    {tip.description}
                  </div>
                  <div className=" font-bold pt-5 capitalize ">
                    TND {tip.price} night
                  </div>
                  <div className="flex space-x-2 border rounded-full p-2 border-light w-full mt-4 ">
                    <LocationMarkerIcon className="w-4 " />
                    <div className=" ">{tip.place}</div>
                  </div>
                  <div className="flex space-x-16 pt-3 justify-center items-center">
                    {/* BEDS ARE HERE */}
                    <div className="flex space-x-3 border rounded-full p-2 border-light">
                      <div>{tip.beds}</div>
                      <img className="w-4 " src={BedLogo} alt="" />
                    </div>
                    {/* BATHS ARE HERE */}
                    <div className="flex space-x-3 border rounded-full p-2 border-light">
                      <div className="">{tip.baths}</div>
                      <img className="w-4 " src={BathLogo} alt="" />
                    </div>
                    {/* ROOMS ARE HERE */}
                    <div className="flex space-x-3 border rounded-full p-2 border-light">
                      <div>{tip.rooms}</div>
                      <img className="w-4 " src={RoomLogo} alt="" />
                    </div>
                  </div>
                  <div className="flex space-x-2 pt-4">
                    <div className="text-lg  bg-primary  text-white rounded-lg px-2 py-2 shadow-xl  ">
                      Contact the Host
                    </div>
                    <div className="text-lg bg-transparent rounded-lg px-2 py-2 ">
                      (+216) {tip.host.phoneNumber}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
}

TipInformation.propTypes = {
  tipState: PropTypes.object.isRequired,
  getTips: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  tipState: state.tipState,
});

const mapDispatchToProps = {
  getTips,
};
export default connect(mapStateToProps, mapDispatchToProps)(TipInformation);
