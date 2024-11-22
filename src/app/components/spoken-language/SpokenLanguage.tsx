import React, {FC} from 'react';
import {ISpokenLanguage} from "@/app/models/IMovieFull";

type PropsType = {
    language: ISpokenLanguage
}
const SpokenLanguage: FC<PropsType> = ({language}) => {
    return (
        <div>
            <p>Name: {language.name}</p>
            <p>English name: {language.english_name} / <i>{language.iso_639_1}</i></p>
        </div>
    );
};

export default SpokenLanguage;