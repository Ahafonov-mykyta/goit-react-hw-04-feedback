import propTypes from "prop-types";

export default function Section ({title, children}){
    return <>
    {title && <h1 className="title">{title} </h1>}
    {children}
    </>                

}           

Section.propTypes = {
    title: propTypes.string.isRequired
}