import {newsAndArticles} from "../../../service";


const FilterInput = ({name, type, placeholder})=>{
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
}


export default function NewsAndArticles() {
    return (
        <main className="">

            {/*<div className="items-center">
                <div
                    className="relative px-5 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert font-bold text-3xl font-bold"
                >
                    Articles
                </div>
            </div>*/}


            <div className="pb-20 h-0.5 bg-gray-300 px-2">
                <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                    <div className="md:flex">
                        <div className="w-full p-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                                    name=""
                                    placeholder="Search Article"
                                />
                                <span className="absolute top-4 right-5 border-l pl-4">
                                    <svg className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                                    </svg>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="p-1 bg-sky-500/75 px-2">
                <div className="mx-auto rounded-lg overflow-hidden">
                    <div className="md:flex mt-1.5">

                        <FilterInput name="from" type="date" placeholder=""/>
                        <FilterInput name="to" type="date" placeholder=""/>
                        <FilterInput name="category" type="text" placeholder="Category"/>
                        <FilterInput name="source" type="text" placeholder="Source"/>

                    </div>
                </div>
            </div>



            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">

                {newsAndArticles.map((elm, index)=>{
                    return (
                        <a href="#">
                            <div className="rounded overflow-hidden shadow-lg" key={index}>
                            {/*<img className="w-full" src="/mountain.jpg" alt="Mountain"/>*/}
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Mountain</div>
                                    <p className="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea!
                                        Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                </div>
                            </div>
                        </a>
                    )
                })}

            </div>


        </main>
    )
};
