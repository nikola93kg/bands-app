import React from "react";
import Band from "./Band"

const BandsList = ({ bands, changeCurrentBand }) => {
    const allBands = bands.map(band => {
        return (
            <div className="col-6" key={band.id}>
                <Band band={band} changeCurrentBand={changeCurrentBand} /> {/* ovaj band je iz loop-a, map */}
            </div>
        )
    })
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="row">
                        {allBands}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BandsList;