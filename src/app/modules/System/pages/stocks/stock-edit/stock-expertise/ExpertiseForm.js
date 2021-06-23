
import React, { useState } from 'react';


import { ExpertiseTableItems } from '../../StocksUIHelper'

import ExpertiseSelectionSVG from './ExpertiseSelectionSVG';
import ExpertiseSelectionTable from './ExpertiseSelectionTable';


export function ExpertiseForm({ expertiseValues,setValues }) {
    const [seletedPath, setSelectedPath] = useState("-1")

    const handleChange = (e) => {
        setValues({
            ...expertiseValues,
            [e.target.name]: e.target.value,
        })
    }
    const clickOnDamageOptionsItem = (e) => {
        const itemClass = e.target.classList[1] || e.target.parentElement.classList[1];
        if (seletedPath != -1) {
            const n = document.querySelector(".typeOfDamege");
            if (null != n) {
                var path = document.getElementById(`Path-item${seletedPath}`);
                path.classList.value = "";
                path.classList.add(itemClass);
                var name = ExpertiseTableItems.find(q => q.id == seletedPath).name;
                setValues({
                    ...expertiseValues,
                    [name]: itemClass,
                })
                
                n.classList.remove("show");
                setSelectedPath("-1")
            }
        }
    }
    return (
        <div className="form-element-row">
                <div className="form-element-container text-detail">
                    <ExpertiseSelectionTable values={expertiseValues} handleChange={handleChange} />
                </div>
                <div className="form-element-container svg-detail">
                    <ExpertiseSelectionSVG values={expertiseValues} setSelectedPath={setSelectedPath} />
                    <div className="guide-of-svg">
                        <div className="painted"><span>Boyalı</span></div>
                        <div className="changed"><span>Değişmiş</span></div>
                    </div>
                    <div className="typeOfDamege">
                        <div className="opetion-item orginal" onClick={clickOnDamageOptionsItem}>
                            <span>Orjinal</span>
                        </div>
                        <div className="opetion-item painted" onClick={clickOnDamageOptionsItem}>
                            <span>Boyalı</span>
                        </div>
                        <div className="opetion-item changed" onClick={clickOnDamageOptionsItem}>
                            <span>Değişen</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}
