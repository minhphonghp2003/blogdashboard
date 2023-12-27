import React from "react";

function loading() {
    return (
        <div className="min-h-screen bg-[#232333]">
            <header className="bg-gray py-8">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="animate-pulse flex items-center space-x-4">
                        <div className="h-12 w-12 bg-gray rounded-full"></div>
                        <div>
                            <div className="h-4 w-20 bg-gray rounded"></div>
                            <div className="h-4 w-16 bg-gray rounded mt-2"></div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-gray rounded w-2/3"></div>
                    <div className="h-4 bg-gray rounded"></div>
                    <div className="h-4 bg-gray rounded"></div>
                    <div className="h-4 bg-gray rounded w-1/2"></div>
                    <div className="h-4 bg-gray rounded"></div>
                    <div className="h-4 bg-gray rounded"></div>
                    <div className="h-4 bg-gray rounded w-3/4"></div>
                </div>

                <div className="animate-pulse space-y-4 mt-12">
                    <div className="h-4 bg-gray rounded w-2/3"></div>
                    <div className="h-4 bg-gray rounded"></div>
                    <div className="h-4 bg-gray rounded"></div>
                    <div className="h-4 bg-gray rounded w-1/2"></div>
                    <div className="h-4 bg-gray rounded"></div>
                    <div className="h-4 bg-gray rounded"></div>
                </div>
            </div>
        </div>
    );
}

export default loading;
