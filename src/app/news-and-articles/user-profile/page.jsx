

const FavoritePreference = ({name, datas})=>{

    return (
        <div className="mr-2 rounded overflow-hidden shadow-lg content-center">
            {/*<img className="w-full" src="/mountain.jpg" alt="Mountain" />*/}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Your Favorite {name}</div>

            </div>
            <div className="px-6 pt-4 pb-2">

                {
                    datas.map((data, index)=>{
                        return (
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                photography
                            </span>
                        )
                    })
                }

            </div>

            <div className="px-6 py-4">
                <p className="text-gray-700 text-base">
                    Select a new {name} if you want
                </p>
                <select name="" id="">
                    <option value="">a</option>
                    <option value="">b</option>
                </select>
            </div>
        </div>
    )
}

export default function UserProfile() {
    return (
        <div className="p-16">
            <div className="p-8 bg-white shadow mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                        <div>
                            <p className="font-bold text-gray-700 text-xl">22</p>
                            <p className="text-gray-400">Source</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-xl">10</p>
                            <p className="text-gray-400">Authors</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-xl">89</p>
                            <p className="text-gray-400">Category</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                        <button
                            className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            Go to Portal
                        </button>
                        <button
                            className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            Logout
                        </button>
                    </div>
                </div>


                <div className="mt-20 text-center pb-12">
                    <h1 className="text-4xl font-medium text-gray-700">
                        Jessica Jones, &nbsp;
                        <span className="font-light text-gray-500">27</span>
                    </h1>
                    <p className="font-light text-gray-600 mt-3">Bucharest, Romania</p>


                    <div className="mt-8 text-gray-500">

                        <div className="p-5 ">
                            <label className="flex items-center relative w-max mx-auto cursor-pointer select-none">
                                <span className="text-lg font-bold mr-3">Personalized news feed</span>
                                <input
                                    type="checkbox"
                                    className="custom-ts-switch appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500"
                                />
                                <span className="absolute font-medium text-xs uppercase right-1 text-white">
                                OFF
                            </span>
                                <span className="absolute font-medium text-xs uppercase right-8 text-white">
                                ON
                            </span>
                                <span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200"/>
                            </label>
                        </div>

                    </div>

                    <div className="p-10 flex justify-center">

                        <FavoritePreference name="Source" datas={['photography', 'travel', 'winter']}/>

                        <FavoritePreference name="Authors" datas={['photography', 'travel', 'winter']}/>

                        <FavoritePreference name="Category" datas={['photography', 'travel', 'winter']}/>

                    </div>


                </div>

                {/* <div className="mt-12 flex flex-col justify-center">
                    <p className="text-gray-600 text-center font-light lg:px-16">
                        An artist of considerable range, Ryan —
                        the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records
                        all of
                        his own music, giving it a warm, intimate feel with a solid groove structure. An artist of
                        considerable range.
                    </p>
                    <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
                        Show more
                    </button>
                </div> */}
            </div>
        </div>
    );
}
