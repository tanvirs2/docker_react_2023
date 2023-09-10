


export default function UserRegistration() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <div
                className="rounded p-5 bg-gradient-to-r from-cyan-500 to-blue-500 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert font-bold text-5xl"
            >
                News Aggregator
            </div>

            <div className="mb-32 grid text-center">
                <div className="">
                    <form className="px-4 rounded mx-auto max-w-3xl w-full my-32 inputs space-y-6">
                        <div>
                            <h1 className="text-4xl font-bold">User Registration</h1>
                            <p className="text-gray-600">
                                Registration to save your preferences and settings.
                            </p>
                        </div>

                        <div>
                            <label htmlFor="address">Email</label>
                            <input
                                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="text"
                                name="address"
                                id="address"
                            />

                        </div>

                        <div>
                            <label htmlFor="address">Password</label>
                            <input
                                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="password"
                                name="address"
                                id="address"
                            />
                        </div>

                        <div>
                            <label htmlFor="address">Retype Password</label>
                            <input
                                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="password"
                                name="address"
                                id="address"
                            />
                        </div>

                        <div>
                            <button className="btn-primary">Save</button>
                        </div>

                    </form>
                </div>


            </div>


        </main>
    )
};
