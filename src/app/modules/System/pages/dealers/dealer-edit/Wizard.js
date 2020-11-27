import React from "react";
import { Formik } from "formik";

import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../../_metronic/_helpers/AssetsHelpers";





export class Wizard extends React.Component {
    static Page = ({ children, parentState }) => {
        return children(parentState);
    };

    constructor(props) {
        
        super(props);
        this.state = {
            page: 0,
            values: props.initialValues,
        };
    }

    next = values =>   this.setState(state => ({
        page: Math.min(state.page + 1, this.props.children.length - 1),
        values
    }));

    previous = () =>
        this.setState(state => ({
            page: Math.max(state.page - 1, 0)
        }));

    validate = values => {
        const activePage = React.Children.toArray(this.props.children)[
            this.state.page
        ];
        return activePage.props.validate ? activePage.props.validate(values) : {};
    };

    handleSubmit = (values, bag) => {
        
        const { children, onSubmit } = this.props;
        const { page } = this.state;
        const isLastPage = page === React.Children.count(children) - 1;

        if (isLastPage) {
            return onSubmit(values, bag);
        } else {
            bag.setTouched({});
            bag.setSubmitting(false);
            this.next(values);
        }
    };

    render() {
        const { children, arrayProgress,schemaArray } = this.props;
        const { page, values } = this.state;
        const activePage = React.Children.toArray(children)[page];
        console.log(activePage, "activePage");
        const isLastPage = page === React.Children.count(children) - 1;
        return (
            <Formik
                initialValues={values}
                enableReinitialize={false}
                // validate={this.validate}
                // validationSchema={this.schemaArray[page]}
                validationSchema={schemaArray[page]}
                onSubmit={this.handleSubmit}
            >
                {props => {
                    const { handleSubmit, isSubmitting } = props;
                    
                    return (
                        <form onSubmit={handleSubmit} id="wizardForm">
                            <div className="wizard wizard-2">
                                <div className="wizard-nav border-right py-8 px-8 py-lg-20 px-lg-10">
                                    <div className="wizard-steps" >
                                        {arrayProgress.map(function (item, index) {
                                                return (
                                                    <div key={item.id} className="wizard-step" data-wizard-state={page === index ? "current" : "pending"}>
                                                        <div className="wizard-wrapper">
                                                            <div className="wizard-icon">
                                                                <span className="svg-icon svg-icon-2x">
                                                                    <SVG src={toAbsoluteUrl(item.icon)} />

                                                                </span>
                                                            </div>
                                                            <div className="wizard-label">
                                                                <h3 className="wizard-title">{item.title}</h3>
                                                                <div className="wizard-desc">{item.description}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>

                                <div className="wizard-body py-8 px-8 py-lg-20 px-lg-10">
                                    <div className="row">
                                        <div className="offset-xxl-1 col-xxl-10">
                                            {React.cloneElement(activePage, { parentState: { ...props } })}

                                            {/*begin: Wizard Actions*/}
                                            <div className="d-flex justify-content-between border-top mt-5 pt-10">
                                                <div className="mr-2">
                                                    {page > 0 && (
                                                        <button type="button" onClick={this.previous} className="btn btn-light-primary font-weight-bolder text-uppercase px-9 py-4" >Geri</button>
                                                    )}
                                                </div>
                                                <div>
                                                    {isLastPage && <button type="submit" className="btn btn-success font-weight-bolder text-uppercase px-9 py-4" disabled={isSubmitting}>Tamamla</button>}
                                                    {!isLastPage && <button type="submit" /*(validation kullanmak istemezsen bunu yorum satırından çıkar) onClick={this.next} */ className="btn btn-primary font-weight-bolder text-uppercase px-9 py-4">İleri</button>}
                                                </div>
                                            </div>
                                            {/*end: Wizard Actions*/}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        );
    }
}
