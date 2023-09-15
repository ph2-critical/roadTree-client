import Image from "next/image";


export const Search = () => {
    return (
        <div className="relative mx-5 py-5 focus-within:grow ease-out duration-200">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Image src="/header/searchIcon.svg" alt="search" width={20} height={20} />
            </div>
            <input type="search" id="default-search" className="w-full p-3 pl-10 text-sm border-none text-gray-900 rounded-lg bg-gray5 focus:ring-2 focus:ring-doingColor focus:bg-white" placeholder="로드트리 검색하기" required />
        </div>
    );
};
