import {useEffect} from "react";

export const SchoolSearch = ({value, onChangeSearch}) => {
    useEffect(() => {
        let search = document.querySelector('input');

        search.addEventListener('input', onChangeSearch);

        return search.removeEventListener('input', onChangeSearch);
    })
    return (
        <input
            type="text"
            value={value}
            onChange={onChangeSearch}
            placeholder="Search schools"
        />
    );
}
