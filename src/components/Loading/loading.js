import React from 'react'

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
                <svg
                    className="animate-spin -ml-1 mr-3 h-20 w-20 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
            </div>
            <div className="text-2xl font-semibold text-center text-red-600">
                Loading...
            </div>
        </div>
    )
}
