import React from "react"
import { shimmer } from "../../../utils/css"

export const CardSkeleton = () => {
    return (
        <div className="max-w-full rounded-xl overflow-hidden shadow-md bg-white">
            <div className={`w-full h-64 ${shimmer}`} />
            <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                    <div className="space-y-2">
                        <div className={`h-4 w-32 rounded ${shimmer}`} />
                        <div className={`h-3 w-24 rounded ${shimmer}`} />
                    </div>
                    <div className={`h-6 w-20 rounded-full ${shimmer}`} />
                </div>
                <div className="flex justify-between pt-2">
                    <div className={`h-4 w-16 rounded ${shimmer}`} />
                    <div className={`h-4 w-20 rounded ${shimmer}`} />
                </div>
            </div>
        </div>
    )
}