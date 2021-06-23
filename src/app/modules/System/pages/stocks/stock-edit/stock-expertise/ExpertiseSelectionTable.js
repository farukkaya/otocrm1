import React from 'react'
import { Formik, Form, Field } from "formik";

import { ExpertiseTableItems } from '../../StocksUIHelper'
export default function ExpertiseSelectionTable({ values, handleChange }) {

    const addHover = (e) => {
        const pathId = `Path-item${e.target.id.substring(5)}`
        var path = document.getElementById(pathId);
        path && path.classList.add("hover")
    }
    const removeHover = (e) => {
        let allPath = document.getElementsByTagName("path");
        allPath = Array.from(allPath).map(function (item, index) {
            item.classList.remove("hover");
        });

    }

    return (
        <>
            <div className="elements-title-container">
                <div className="title title-text-container"></div>
                <div className="orginal title-text-container">Orijinal</div>
                <div className="painted title-text-container">Boyalı</div>
                <div className="changed title-text-container">Değişmiş</div>
            </div>
            <Formik
                initialValues={values}
                className="form-inline"
            >
                {() => (
                   <>{ExpertiseTableItems.map((item) => (
                        <div id={`item-${item.id}`} key={item.id} className="elements-row" onMouseEnter={addHover} onMouseLeave={removeHover}>
                            <div className="title title-text-container">{item.title}</div>
                            <div className="orginal title-text-container ">
                                <label className="checkbox ">
                                    <Field type="radio" name={item.name} value="orginal" onChange={handleChange} checked={values[item.name] === 'orginal'} />
                                    <span><i className="icon icon-arabam-check "></i></span>
                                </label>
                            </div>
                            <div className="painted title-text-container">
                                <label className="checkbox">
                                    <Field type="radio" name={item.name} value="painted" onChange={handleChange} checked={values[item.name] === 'painted'} />
                                    <span><i className="icon icon-arabam-check"></i></span>
                                </label>
                            </div>
                            <div className="changed title-text-container ">
                                <label className="checkbox">
                                    <Field type="radio" name={item.name} value="changed" onChange={handleChange} checked={values[item.name] === 'changed'} />
                                    <span><i className="icon icon-arabam-check"></i></span>
                                </label>
                            </div>

                        </div>
                    ))
                   }</>

                )}

            </Formik>

        </>
    )
}
