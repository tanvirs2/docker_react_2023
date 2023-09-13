"use client";

import Link from "next/link";
//import {newsAndArticles} from "../../service";
import {useEffect, useState} from "react";
import {axiosWithBase} from "../../../utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Select from "react-select";



export default function NewsAndArticles() {

    const [newsLoader, setNewsLoader] = useState(true);
    const [newsAndArticles, setNewsAndArticles] = useState([]);
    const [filterType, setFilterType] = useState('source');
    const [searchVal, setSearchVal] = useState(null);

    let [startDate, setStartDate] = useState(null);
    let [endDate, setEndDate] = useState(null);

    useEffect(()=>{
        searchHandler();
    }, [filterType]);

    const searchHandler = (e) => {
        let btnClicked = e??null;
        console.log('search_btnClicked:', btnClicked);
        setNewsLoader(true);

        let startDate2 = startDate ? moment(startDate).format('YYYY-MM-DD') : null;
        let endDate2 = endDate ? moment(endDate).format('YYYY-MM-DD') : null;

        let url = `/scrapping?btnClicked=${btnClicked}&title=${searchVal}&filterType=${filterType}&from=${startDate2}&to=${endDate2}`;

        axiosWithBase.get(url).then(({data})=>{
            //setStartDate(null);
            //setEndDate(null);
            setNewsLoader(false);
            setNewsAndArticles(data);
        })
    }

    return (
        <main className="">

            <div className="bg-gray-100 rounded-md flex items-center pl-6">

                {/*<label htmlFor="">
                    <span className="bg-transparent font-bold text-lg ml-4">From: </span>
                    <input
                        className="bg-transparent uppercase font-bold text-sm focus:outline-none"
                        name=""
                        type="date"
                    />
                </label>

                <label htmlFor="">
                    <span className="bg-transparent font-bold text-lg border-l pl-4 border-gray-300 ml-4">To: </span>
                    <input
                        className="bg-transparent uppercase font-bold text-sm focus:outline-none pr-4"
                        name=""
                        type="date"
                    />
                </label>*/}


                {/*<select
                    className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
                    name=""
                    id=""
                >
                    <option>categories</option>
                </select>*/}
                <div
                    className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
                >
                    <div className="ml-2 lg:ml-4 relative inline-block ">
                        User Preferred <br/>
                        <label className="cursor-pointer mr-3">
                            Source <input type="radio" name="filterType" value="source" onClick={(e)=>{

                            console.log(e.target.value);

                            setFilterType(e.target.value)

                        }} onChange={()=>{}} checked={filterType === 'source'}/>
                        </label>

                        <label className="cursor-pointer">
                            Author <input type="radio" name="filterType" value="author" onClick={(e)=>{

                            console.log(e.target.value);

                            setFilterType(e.target.value)

                        }} onChange={()=>{}} checked={filterType === 'author'}/>
                        </label>

                    </div>
                </div>
                <input
                    className="border-l w-1/2 border-gray-300 bg-transparent focus:outline-none font-semibold text-xl pl-4"
                    type="text"
                    placeholder="Article searching ..."
                    onChange={event => setSearchVal(event.target.value)}
                />

            </div>

            <div className="flex overflow-hidden bg-indigo-100 justify-center">
                <div className="flex text-center">

                    <div className="flex p-3">
                        <p className="text-gray-700 font-bold"> {filterType} : </p>
                        <Select options={[]} onChange={alert} />
                    </div>

                    <p className="mt-3">From:</p>
                    <DatePicker
                    className="border rounded p-3 mt-2"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                />
                    <p className="mt-3">To:</p>
                    <DatePicker
                    className="border rounded p-3 mt-2"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                />
                    <button onClick={searchHandler} className="border bg-indigo-100">
                        <svg

                            className="m-auto h-5 px-4 text-gray-500 cursor-pointer"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="search"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                            />
                        </svg>
                    </button>


                    <div className="font-bold text-2xl mt-4 text-green-500">{newsLoader ? 'loading...': `${newsAndArticles.length} Articles`}</div>

                </div>
            </div>

            <div
                className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

                {newsAndArticles.map(({id, title, author, img, short_description, category, source, publish_date}, index) => {
                    return (
                        <Link href={`/news-and-articles/view-news/${id}`} key={index}>
                            <div className="rounded overflow-hidden shadow-lg">
                                <img className="w-full" src={img ?? 'https://placehold.co/600x400?text=No%20Image'} alt="Mountain"/>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{title}</div>
                                    <div className="flex text-xs text-red-400">By: {author}</div>
                                    <div className="flex text-xs text-green-500">Publish: {publish_date}</div>
                                    <p className="text-gray-700 text-base mb-2">
                                        {short_description}
                                    </p>
                                    <hr/>
                                    <div className="flex justify-between mt-4 text-xs">
                                        <div className="flex flex-row text-blue-600">Source: {source}</div>
                                        <div className="flex flex-row-reverse text-blue-600">Category: {category}</div>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    )
                })}

            </div>


        </main>
    )
};
