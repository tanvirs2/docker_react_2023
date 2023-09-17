"use client"

import Link from "next/link";
import useAuthContext from "../../context/AuthContext";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {axiosWithBase} from "../../../utils";


const Header = () => {

  const {logout, user} = useAuthContext();
  const router = useRouter();

  //console.log('user:',user);

  useEffect(()=>{

    if (!user) {
      router.push("/")
    }

  }, [])


  return (
      <header className="bg-white">
        <div className="container mx-auto px-4 py-8 flex items-center overflow-hidden">
          {/* logo */}
          <div className="mr-auto md:w-48 flex-shrink-0">
            <Link href="/">
              <p className="text-2xl">News Aggregator</p>
            </Link>
          </div>

          <div className="mr-auto md:w-48 flex-shrink-0" onClick={()=>{
            (async ()=>{
              await axiosWithBase.get("/fetch-for-today");
            })()
          }}>
            <Link href="/">
              <p className="text-xs text-blue-600 border rounded p-1 text-center">Fetch Articles</p>
            </Link>
          </div>

          {/* search */}

          {/* phone number */}
          {/*<div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
            <span className="font-bold md:text-xl">8 800 332 65-66</span>
            <span className="font-semibold text-sm text-gray-400">Support 24/7</span>
          </div>*/}
          {/* buttons */}
          <nav className="contents">
            <ul className="ml-4 flex items-center justify-end">

              <li className="ml-2 lg:ml-4 relative inline-block">
                <Link className="" href="/">
                  {/*<div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                    3
                  </div>*/}
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width={30}
                      height={30}
                      viewBox="0 0 50 50"
                  >
                    <path
                        d="M 1.71875 2.78125 C 1.253906 2.886719 0.925781 3.304688 0.9375 3.78125 L 0.9375 39.46875 C 0.9375 43.714844 3.144531 46.109375 5.3125 47.1875 C 7.480469 48.265625 9.625 48.21875 9.625 48.21875 L 40.375 48.21875 L 40.375 48.125 C 40.855469 48.179688 41.375 48.21875 41.375 48.21875 C 41.375 48.21875 43.296875 48.230469 45.21875 47.125 C 47.09375 46.046875 48.941406 43.765625 49.03125 39.8125 C 49.042969 39.792969 49.054688 39.769531 49.0625 39.75 C 49.0625 39.726563 49.0625 39.710938 49.0625 39.6875 C 49.066406 39.636719 49.066406 39.582031 49.0625 39.53125 L 49.0625 14.4375 C 49.0625 14.425781 49.0625 14.417969 49.0625 14.40625 C 49.0625 14.40625 49.078125 13.234375 48.46875 12.03125 C 47.859375 10.828125 46.441406 9.53125 44.21875 9.53125 L 44.21875 9.5 L 34.75 9.5 L 34.75 11.5 L 40.3125 11.5 C 40.191406 11.671875 40.089844 11.828125 40 12 C 39.390625 13.191406 39.375 14.375 39.375 14.375 L 39.375 38.625 C 39.371094 38.984375 39.558594 39.320313 39.871094 39.503906 C 40.183594 39.683594 40.566406 39.683594 40.878906 39.503906 C 41.191406 39.320313 41.378906 38.984375 41.375 38.625 L 41.375 14.375 C 41.375 14.347656 41.414063 13.625 41.78125 12.90625 C 42.15625 12.175781 42.683594 11.53125 44.21875 11.53125 C 45.75 11.53125 46.277344 12.191406 46.65625 12.9375 C 47.027344 13.671875 47.09375 14.410156 47.09375 14.4375 L 47.0625 14.4375 L 47.0625 39.53125 C 47.0625 43.089844 45.640625 44.589844 44.21875 45.40625 C 42.796875 46.222656 41.375 46.21875 41.375 46.21875 C 41.375 46.21875 39.683594 46.195313 38 45.34375 C 36.316406 44.492188 34.6875 42.996094 34.6875 39.46875 L 34.6875 3.78125 C 34.6875 3.230469 34.238281 2.78125 33.6875 2.78125 L 1.9375 2.78125 C 1.863281 2.773438 1.792969 2.773438 1.71875 2.78125 Z M 2.9375 4.78125 L 32.6875 4.78125 L 32.6875 39.46875 C 32.6875 42.757813 34.082031 44.910156 35.71875 46.21875 L 9.625 46.21875 C 9.613281 46.21875 9.605469 46.21875 9.59375 46.21875 C 9.59375 46.21875 9.164063 46.222656 8.53125 46.125 C 8.214844 46.074219 7.863281 45.992188 7.46875 45.875 C 7.074219 45.757813 6.636719 45.613281 6.21875 45.40625 C 6.007813 45.300781 5.796875 45.191406 5.59375 45.0625 C 4.164063 44.164063 2.9375 42.613281 2.9375 39.46875 Z M 6.9375 11 C 6.386719 11.078125 6 11.589844 6.078125 12.140625 C 6.15625 12.691406 6.667969 13.078125 7.21875 13 L 26.9375 13 C 27.296875 13.003906 27.632813 12.816406 27.816406 12.503906 C 27.996094 12.191406 27.996094 11.808594 27.816406 11.496094 C 27.632813 11.183594 27.296875 10.996094 26.9375 11 L 7.21875 11 C 7.1875 11 7.15625 11 7.125 11 C 7.09375 11 7.0625 11 7.03125 11 C 7 11 6.96875 11 6.9375 11 Z M 6.9375 15 C 6.386719 15.078125 6 15.589844 6.078125 16.140625 C 6.15625 16.691406 6.667969 17.078125 7.21875 17 L 26.9375 17 C 27.296875 17.003906 27.632813 16.816406 27.816406 16.503906 C 27.996094 16.191406 27.996094 15.808594 27.816406 15.496094 C 27.632813 15.183594 27.296875 14.996094 26.9375 15 L 7.21875 15 C 7.1875 15 7.15625 15 7.125 15 C 7.09375 15 7.0625 15 7.03125 15 C 7 15 6.96875 15 6.9375 15 Z M 7.40625 23 C 6.855469 23.078125 6.46875 23.589844 6.546875 24.140625 C 6.625 24.691406 7.136719 25.078125 7.6875 25 L 14.46875 25 C 14.828125 25.003906 15.164063 24.816406 15.347656 24.503906 C 15.527344 24.191406 15.527344 23.808594 15.347656 23.496094 C 15.164063 23.183594 14.828125 22.996094 14.46875 23 L 7.6875 23 C 7.65625 23 7.625 23 7.59375 23 C 7.5625 23 7.53125 23 7.5 23 C 7.46875 23 7.4375 23 7.40625 23 Z M 18.9375 23 C 18.386719 23.078125 18 23.589844 18.078125 24.140625 C 18.15625 24.691406 18.667969 25.078125 19.21875 25 L 26.9375 25 C 27.296875 25.003906 27.632813 24.816406 27.816406 24.503906 C 27.996094 24.191406 27.996094 23.808594 27.816406 23.496094 C 27.632813 23.183594 27.296875 22.996094 26.9375 23 L 19.21875 23 C 19.1875 23 19.15625 23 19.125 23 C 19.09375 23 19.0625 23 19.03125 23 C 19 23 18.96875 23 18.9375 23 Z M 7.40625 27 C 6.855469 27.078125 6.46875 27.589844 6.546875 28.140625 C 6.625 28.691406 7.136719 29.078125 7.6875 29 L 14.46875 29 C 14.828125 29.003906 15.164063 28.816406 15.347656 28.503906 C 15.527344 28.191406 15.527344 27.808594 15.347656 27.496094 C 15.164063 27.183594 14.828125 26.996094 14.46875 27 L 7.6875 27 C 7.65625 27 7.625 27 7.59375 27 C 7.5625 27 7.53125 27 7.5 27 C 7.46875 27 7.4375 27 7.40625 27 Z M 18.9375 27 C 18.386719 27.078125 18 27.589844 18.078125 28.140625 C 18.15625 28.691406 18.667969 29.078125 19.21875 29 L 26.9375 29 C 27.296875 29.003906 27.632813 28.816406 27.816406 28.503906 C 27.996094 28.191406 27.996094 27.808594 27.816406 27.496094 C 27.632813 27.183594 27.296875 26.996094 26.9375 27 L 19.21875 27 C 19.1875 27 19.15625 27 19.125 27 C 19.09375 27 19.0625 27 19.03125 27 C 19 27 18.96875 27 18.9375 27 Z M 18.9375 30.78125 C 18.386719 30.859375 18 31.371094 18.078125 31.921875 C 18.15625 32.472656 18.667969 32.859375 19.21875 32.78125 L 26.9375 32.78125 C 27.296875 32.785156 27.632813 32.597656 27.816406 32.285156 C 27.996094 31.972656 27.996094 31.589844 27.816406 31.277344 C 27.632813 30.964844 27.296875 30.777344 26.9375 30.78125 L 19.21875 30.78125 C 19.15625 30.773438 19.09375 30.773438 19.03125 30.78125 C 19 30.78125 18.96875 30.78125 18.9375 30.78125 Z M 7.40625 31 C 6.855469 31.078125 6.46875 31.589844 6.546875 32.140625 C 6.625 32.691406 7.136719 33.078125 7.6875 33 L 14.46875 33 C 14.828125 33.003906 15.164063 32.816406 15.347656 32.503906 C 15.527344 32.191406 15.527344 31.808594 15.347656 31.496094 C 15.164063 31.183594 14.828125 30.996094 14.46875 31 L 7.6875 31 C 7.65625 31 7.625 31 7.59375 31 C 7.5625 31 7.53125 31 7.5 31 C 7.46875 31 7.4375 31 7.40625 31 Z M 18.9375 34.78125 C 18.386719 34.859375 18 35.371094 18.078125 35.921875 C 18.15625 36.472656 18.667969 36.859375 19.21875 36.78125 L 26.9375 36.78125 C 27.296875 36.785156 27.632813 36.597656 27.816406 36.285156 C 27.996094 35.972656 27.996094 35.589844 27.816406 35.277344 C 27.632813 34.964844 27.296875 34.777344 26.9375 34.78125 L 19.21875 34.78125 C 19.15625 34.773438 19.09375 34.773438 19.03125 34.78125 C 19 34.78125 18.96875 34.78125 18.9375 34.78125 Z M 7.40625 35 C 6.855469 35.078125 6.46875 35.589844 6.546875 36.140625 C 6.625 36.691406 7.136719 37.078125 7.6875 37 L 14.46875 37 C 14.828125 37.003906 15.164063 36.816406 15.347656 36.503906 C 15.527344 36.191406 15.527344 35.808594 15.347656 35.496094 C 15.164063 35.183594 14.828125 34.996094 14.46875 35 L 7.6875 35 C 7.65625 35 7.625 35 7.59375 35 C 7.5625 35 7.53125 35 7.5 35 C 7.46875 35 7.4375 35 7.40625 35 Z M 18.9375 38.53125 C 18.386719 38.609375 18 39.121094 18.078125 39.671875 C 18.15625 40.222656 18.667969 40.609375 19.21875 40.53125 L 26.9375 40.53125 C 27.296875 40.535156 27.632813 40.347656 27.816406 40.035156 C 27.996094 39.722656 27.996094 39.339844 27.816406 39.027344 C 27.632813 38.714844 27.296875 38.527344 26.9375 38.53125 L 19.21875 38.53125 C 19.1875 38.53125 19.15625 38.53125 19.125 38.53125 C 19.09375 38.53125 19.0625 38.53125 19.03125 38.53125 C 19 38.53125 18.96875 38.53125 18.9375 38.53125 Z M 7.40625 39 C 6.855469 39.078125 6.46875 39.589844 6.546875 40.140625 C 6.625 40.691406 7.136719 41.078125 7.6875 41 L 14.46875 41 C 14.828125 41.003906 15.164063 40.816406 15.347656 40.503906 C 15.527344 40.191406 15.527344 39.808594 15.347656 39.496094 C 15.164063 39.183594 14.828125 38.996094 14.46875 39 L 7.6875 39 C 7.65625 39 7.625 39 7.59375 39 C 7.5625 39 7.53125 39 7.5 39 C 7.46875 39 7.4375 39 7.40625 39 Z"/>
                  </svg>

                </Link>
              </li>

              <li className="ml-2 lg:ml-4 relative inline-block">

                <Link href="/news-and-articles/user-profile">
                  <div className="flex rounded px-2 border border-gray-300">
                    <div className="font-bold pt-2">{user?.name}</div>
                    <svg
                        className="h-9 lg:h-10 p-2 text-gray-500"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="user"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                      <path
                          fill="currentColor"
                          d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                      />
                    </svg>
                  </div>

                </Link>

              </li>

              {/*<li className="ml-2 lg:ml-4 relative inline-block">
                <a className="" href="">
                  <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                    12
                  </div>
                  <svg
                      className="h-9 lg:h-10 p-2 text-gray-500"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="shopping-cart"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                  >
                    <path
                        fill="currentColor"
                        d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                    />
                  </svg>
                </a>
              </li>*/}
            </ul>
          </nav>
          <div className="ml-4 hidden sm:flex flex-col font-bold cursor-pointer" onClick={logout}>
            <span>Logout</span>
          </div>

        </div>
        <hr />
      </header>
  )
}

export default function RootLayout({ children }) {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}
