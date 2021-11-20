import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {HashLink as Link} from "react-router-hash-link";

const Search = (props) => {
    let [openHelp, setOpenHelp] = useState(false)
    let [searchText, setSearchText] = useState('')
    let [res, setRes] = useState([])
    const data = useSelector(state => state.mainInfo.search);

    function startSearch(e) {
        setRes([])
        searchText.length > 1 ? setOpenHelp(true) : setOpenHelp(false)
        setSearchText(e.target.value.toLowerCase())
        // eslint-disable-next-line array-callback-return
        let findHelp = []
        data.map((item) => {
            item.map((ob) => {
                // eslint-disable-next-line no-unused-expressions
                ob.question.toLowerCase().includes(searchText) ? findHelp.push(ob) : false
            })
        })
        setRes(findHelp)
    }

    function changeShowHelp() {
        setOpenHelp(false)
        props.setShowMenu(false)
    }


    return (
        <div className='search-block'>
            <input className='search-block__text' type="text" placeholder='Искать...'
                   onChange={startSearch}/>
            {openHelp && <div className='search-block__help' onClick={changeShowHelp}>
                {res.map((item, index) => {
                    return <Link
                            to={{
                                pathname: item.page,
                                hash: `#${item.id}`
                            }}
                            key={item.question}>
                            <div>{item.question}</div>
                        </Link>
                })}
            </div>}
        </div>
    );
};

export default Search;
