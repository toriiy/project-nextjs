import React, {FC} from 'react';
import {IProdCountry} from "@/app/models/IMovieFull";

type PropsType = {
    country: IProdCountry
}
const ProductionCountry: FC<PropsType> = ({country}) => {
    return (
        <div>
            <p>Name: {country.name} / <i>{country.iso_3166_1}</i></p>
        </div>
    );
};

export default ProductionCountry;