'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="container section text-center">
            <h2 className="section-title">Something went wrong!</h2>
            <p style={{ color: 'red', marginBottom: '20px' }}>{error.message}</p>
            <button
                className="btn btn-primary"
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}
