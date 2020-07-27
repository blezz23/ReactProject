import s from "./Preloader.module.css";
import React from "react";

const Preloader = () => {
    return <div className={s.lds_ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
};

export default Preloader;