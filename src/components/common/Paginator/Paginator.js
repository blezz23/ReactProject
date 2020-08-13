import s from "./Paginator.module.css";
import React from "react";


export const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={`${props.currentPage === p && s.selectedPage} ${s.pagesNumbers}`}
                             onClick={(event) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
    )
};