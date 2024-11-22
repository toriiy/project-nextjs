import React, {FC} from 'react';
import {IProdCompany} from "@/app/models/IMovieFull";
import styles from './ProductionCompany.module.css'

type PropsType = {
    company: IProdCompany
}
const ProductionCompany: FC<PropsType> = ({company}) => {
    return (
        <div className={styles.block}>
            <h4>Id: {company.id}</h4>
            <p>Name: {company.name}</p>
            <img src={`https://image.tmdb.org/t/p/w500${company.logo_path}`} alt={company.name}
                 className={styles.image}/>
            <p>Origin country: {company.origin_country}</p>
        </div>
    );
};

export default ProductionCompany;