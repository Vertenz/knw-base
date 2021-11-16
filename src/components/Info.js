import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeInfo} from "../features/counter/infoSlice";
import InfoBlock from "./InfoBlock";

const Info = () => {
    const dispatch = useDispatch();
    let data = useSelector(state => state.mainInfo.activeInfo);
    let [info, setInfo] = useState({})
    const page = window.location.pathname.replace('/', '') + 'Info';

    useEffect(() => {
        dispatch(changeInfo(page));
        setInfo(data);
    }, [dispatch, data, page])

    return (
        <section className='info'>
            <div className="info__top">
                <h2 className="info__h">Раздел о {info.name}</h2>
            </div>
            <div className="info__description">
                <h3>{info.description}</h3>
            </div>
            <h3>Ниже примеры вопросов и ответы на них</h3>
            {info.blocks
                ? <div className="info-datas">
                    {info.blocks.map( (item, index) => {
                        return <InfoBlock question={item.question} answer={item.answer} code={item.code} index={index}
                                          key={item.question}/>
                    })}
                </div>
                : <h1>Загурзука</h1>}
        </section>
    );
};


export default Info;
