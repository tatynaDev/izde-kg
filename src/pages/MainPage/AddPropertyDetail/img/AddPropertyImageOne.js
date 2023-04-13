import React from 'react';
import image1 from "../../../../assets/img/AddPropertyDetail/addProperty-image1.svg"
import image2 from "../../../../assets/img/AddPropertyDetail/addProperty-image2.svg"
import image3 from "../../../../assets/img/AddPropertyDetail/addProperty-image3.svg"
import image4 from "../../../../assets/img/AddPropertyDetail/addProperty-image4.svg"
import image5 from "../../../../assets/img/AddPropertyDetail/addProperty-image5.svg"
import "../../../MainPage/AddPropertyDetail/AddPropertyDetail.scss"

const AddPropertyImageOne = () => {
    return (
        <div className="AddPropertyImageOne">
            <img src={image1} alt="img"/>
            <div className="AddPropertyImageOne--children">
                <div className="AddPropertyImageOne--children__one">
                    <img src={image2} alt="img"/>
                    <img src={image3} alt="img"/>
                </div>
                <div className="AddPropertyImageOne--children__two">
                    <img src={image4} alt="img"/>
                    <img src={image5} alt="img"/>
                </div>
            </div>
        </div>
    );
};

export default AddPropertyImageOne;