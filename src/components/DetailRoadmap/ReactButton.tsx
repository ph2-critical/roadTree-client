import { deleteLike, getLikeList, getStarList, insertLike, insertStar } from "@/src/api/detailRefPage/getDetailRefInfo";
import { useModal } from "@/src/utils/hooks/useModal";
import { track } from "@amplitude/analytics-browser";
import Image from "next/image";
import { useEffect, useState } from "react";

interface UserActionType {
    like: {
        count: number;
        iLike: boolean;
    };
    star: {
        count: number;
        value: number;
        iStar: boolean;
    }
}

export function ReactionBut(props: { rid: string, userId: string }) {

    const { rid, userId } = props;

    const [userActionInfo, setUserActionInfo] = useState<UserActionType>()
    const [init, setInit] = useState<boolean>(false);
    const { isOpen, modalRef, openModal, closeModal } = useModal();
    const [myLike, setMyLike] = useState<number>(10);



    const toggleLike = async () => {
        track("click_like_btn", { rid: rid, insertLike: !userActionInfo?.like.iLike });
        if (userActionInfo?.like.iLike) {
            // 좋아요 취소
            deleteLike({ rid: rid, uid: userId });
            setUserActionInfo((prev) => {
                if (prev === undefined) return prev;
                return {
                    ...prev,
                    like: {
                        count: prev.like.count - 1,
                        iLike: false,
                    }
                }
            });


        } else {
            // 좋아요
            insertLike({ rid: rid, uid: userId });
            setUserActionInfo((prev) => {
                if (prev === undefined) return prev;
                return {
                    ...prev,
                    like: {
                        count: prev.like.count + 1,
                        iLike: true,
                    }
                }
            });
        }
    }

    const getUserActionInfo = async (): Promise<boolean> => {
        try {
            const likeUserList: string[] = (await getLikeList({ rid: rid }) ?? []).map(
                (user) => user.uid,
            );
            const starUserList: { uid: string, star: number }[] = (await getStarList({ rid: rid }) ?? [])

            setUserActionInfo({
                like: {
                    count: likeUserList.length,
                    iLike: likeUserList.includes(userId ?? ''),
                },
                star: {
                    count: starUserList.length,
                    value: starUserList.length !== 0 ? starUserList.reduce((acc, cur) => acc + cur.star, 0) / starUserList.length : 0,
                    iStar: starUserList.map((user) => user.uid).includes(userId ?? ''),
                },
            });
        } catch (error) {

            setUserActionInfo({
                like: {
                    count: 0,
                    iLike: false,
                },
                star: {
                    count: 0,
                    value: 0,
                    iStar: false,
                },
            });

            return false;
        }

        return true;
    }

    useEffect(() => {
        if (init) return;
        getUserActionInfo().then(() => { setInit(true); });
    }, []);

    return (
        init &&
        <div className="w-80 h-28 border flex  select-none">
            <div className="w-40 h-28  border flex flex-col justify-center items-center cursor-pointer"
                onClick={toggleLike}>
                <Image
                    src={userActionInfo?.like.iLike ? "/detailRef/heart.svg" : "/detailRef/heart_outlined.svg"}
                    alt="좋아요"
                    width={24}
                    height={24}
                    className="overflow-visible"
                />
                <div className="font-bold">좋아요</div>
                <div className="font-normal text-gray-500">{userActionInfo?.like.count}</div>
            </div>
            <div className={`w-40 h-28 border ${userActionInfo?.star.iStar ? "" : "cursor-pointer"}`} ref={modalRef}>
                {!isOpen ?
                    (<div className="h-full w-full flex flex-col items-center justify-center" onClick={() => {
                        if (userActionInfo?.star.iStar === false) {
                            track("click_open_star_modal_btn", { rid: rid });
                            openModal();
                        }
                    }}>
                        <div className="flex text-red-500 items-center">
                            <Image
                                src={userActionInfo?.star.iStar ? "/detailRef/star_one.svg" : "/detailRef/star_one_outlined.svg"}
                                alt="강의평점"
                                width={30}
                                height={30}
                            />
                            <div className="text-xl ml-1">{userActionInfo?.star.value.toFixed(2)}</div>
                        </div>
                        <div className="font-bold">강의평점</div>
                        <div className="font-normal text-gray-500">{userActionInfo?.star.count}명 참여</div>
                    </div>)
                    : (<div className="h-full w-full shadow-2xl flex flex-col items-center justify-evenly">
                        <div className="flex text-red-500 items-center">
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => {
                                    return (
                                        <Image
                                            key={star}
                                            src={myLike >= star ? "/detailRef/star_half.svg" : "/detailRef/star_half_outlined.svg"}
                                            alt="강의평점"
                                            width={15}
                                            height={30}
                                            className={`overflow-hidden ${star % 2 ? "" : "scale-x-[-1]"} cursor-pointer`}
                                            onClick={() => {
                                                setMyLike(star);
                                                track("change_star_value", { star: star });
                                            }}
                                        />
                                    )
                                })
                            }
                        </div>

                        <button
                            onClick={
                                () => {
                                    setUserActionInfo((prev) => {
                                        if (prev === undefined) return prev;
                                        return {
                                            ...prev,
                                            star: {
                                                count: prev.star.count + 1,
                                                value: (prev.star.value * prev.star.count + myLike) / (prev.star.count + 1),
                                                iStar: true,
                                            }
                                        }
                                    })
                                    insertStar({ rid: rid, uid: userId, value: myLike });
                                    track("click_set_star_btn", { star: myLike });
                                    closeModal();

                                }
                            }
                            className="flex justify-center  w-28 py-2.5 px-4 text-sm font-bold text-center text-white bg-main rounded-lg focus:ring-4 focus:ring-primary-200 "
                        >
                            {myLike}점 주기
                        </button>
                    </div>)}
            </div>
        </div>
    )
}