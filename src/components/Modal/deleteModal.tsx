export const DeleteModal = () => {
  return (
    <div className="bg-modal">
      <div className="flex flex-col bg-white w-[412px] h-52 rounded-lg p-6 justify-center items-center gap-y-[20px]">
        <a className="text-xl">비밀번호를 입력해주세요.</a>
        <span className="w-64 h-10 pt-2 text-sm border border-gray-300 rounded-lg cursor-pointer">
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            className="flex-grow px-4 text-sm rounded-lg focus:outline-none"
          />
        </span>
        <div className="flex gap-[12px]">
          <button className="modal-btn text-gray1">취소</button>
          <button className="text-white modal-btn bg-gray1">삭제하기</button>
        </div>
      </div>
    </div>
  );
};
