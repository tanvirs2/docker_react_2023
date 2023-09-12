"use client";

import Link from "next/link";
//import {newsAndArticles} from "../../service";
import {useEffect, useState} from "react";
import {axiosWithBase} from "../../../utils";


/*const FilterInput = ({name, type, placeholder})=>{
    return (
        <div className="w-full p-3">
            <div className="relative">
                <div className="flex w-50">
                    <div className="rounded-l flex text-white items-center px-4 bg-gray-400 capitalize">
                        {name}
                    </div>
                    <input
                        className="border border-gray-400 px-4 py-2 rounded-r w-full focus:outline-none focus:border-teal-400 mr-2"
                        type={type}
                        name={name}
                        placeholder={placeholder}
                    />
                </div>
            </div>
        </div>
    )
}*/


export default function NewsAndArticles() {

    const [newsAndArticles, setNewsAndArticles] = useState([]);

    useEffect(()=>{
        axiosWithBase.get('scrapping').then(({data})=>{
            //console.log(data)
            setNewsAndArticles(data);
        })
    }, []);

    return (
        <main className="">
            <div className="bg-gray-100 rounded-md flex items-center pl-6">

                <label htmlFor="">
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
                </label>


                <select
                    className="bg-transparent uppercase font-bold text-sm p-4 mr-4 border-l border-gray-300"
                    name=""
                    id=""
                >
                    <option>categories</option>
                </select>
                <select
                    className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
                    name=""
                    id=""
                >
                    <option>Source</option>
                </select>
                <input
                    className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
                    type="text"
                    placeholder="Article searching ..."
                />
                <svg
                    className="ml-auto h-5 px-4 text-gray-500"
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
            </div>


            {/*<div className="p-1 bg-sky-500/75 px-2">
                <div className="mx-auto rounded-lg overflow-hidden">
                    <div className="md:flex mt-1.5">

                        <FilterInput name="from" type="date" placeholder=""/>
                        <FilterInput name="to" type="date" placeholder=""/>
                        <FilterInput name="category" type="text" placeholder="Category"/>
                        <FilterInput name="source" type="text" placeholder="Source"/>

                    </div>
                </div>
            </div>*/}


            <div
                className="p-10 px-40 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

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
