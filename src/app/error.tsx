'use client' // Error boundaries must be Client Components

import React from 'react'

function Error() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <i className="fa-solid fa-circle-exclamation fa-7x text-red-700"></i>

    </div>
  )
}

export default Error




























// import { useEffect } from 'react'

// export default function Error({
//     error,
//     reset,
// }: {
//     error: Error & { digest?: string }
//     reset: () => void
// }) {
//     useEffect(() => {
//         // Log the error to an error reporting service
//         console.error(error)
//     }, [error])

//     return (
//         <div>
//             <h2>Something went wrong!</h2>
//             <button
//                 onClick={
//                     // Attempt to recover by trying to re-render the segment
//                     () => reset()
//                 }
//             >
//                 Try again
//             </button>
//         </div>
//     )
// }