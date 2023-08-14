export default function DailySkeletonPage() {

    return (
        <div className="space-y-12 flex justify-center rounded-md animate-pulse">
            <form>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3 p-3">
                    <div className="sm:col-span-4">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 bg-gray-200 rounded-md h-5 w-20 text-gray-900"></label>
                        <div className="mt-2">
                            <div
                                id="nickname"
                                className="block rounded-md py-1.5 h-9 w-40 text-gray-900 bg-gray-200 "
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label htmlFor="category" className="block text-sm font-medium bg-gray-200 h-5 leading-6 rounded-md w-28 text-gray-900"></label>
                        <div className="mt-2">
                            <div id="category" className="block px-3 w-full h-9 bg-gray-200 rounded-md py-1.5 ">
                                
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 bg-gray-200 rounded-md w-16 h-5 text-gray-900"></legend>
                            <p className="mt-1 text-sm leading-6 bg-gray-200 w-52 text-gray-600 rounded-md"></p>
                            <div className="mt-6 space-y-6 bg-gray-200 w-128 rounded-md h-7">
                                
                            </div>
                        </fieldset>

                    </div>
                    <div className="sm:col-span-4">
                        <label htmlFor="content" className="block h-5 w-32 bg-gray-200 text-sm rounded-md font-medium leading-6 text-gray-900">
                        </label>
                        <div className="mt-2">
                            <div
                                id="content"
           
        
                                className="px-3 block h-20 w-128 rounded-md py-1.5 bg-gray-200"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <div className=" bg-gray-200 h-5 w-32 rounded-md">
                        </div>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <div                          
                                    className="flex-1 py-1.5 pl-1 h-9 w-128 bg-gray-200"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
}

