'use client';
import { useEffect, useState, useRef } from 'react';

// const dropdownTheme: CustomFlowbiteTheme['dropdown'] = {
//   floating: {
//     target: '',
//   },
//   inlineWrapper:
//     'text-gray-600 font-semibold bg-gray-300 hover:brightness-75 p-1 px-2 text-center text-sm rounded-sm flex items-center justify-center',
// };

// const useDetectClose = (initialState :boolean) => {
//   const [isOpen, setIsOpen] = useState<boolean>(initialState);
//   const ref = useRef(null);

//   const removeHandler = () => {
//     setIsOpen(!isOpen);
//   }

//   useEffect(() => {
//     const onClick = (e) => {
//       if (ref.current !== null && !ref.current.contains(e.target)) {
//         setIsOpen(!isOpen)
//       }
//     };

//     if (isOpen) {
//       window.addEventListener("click", onClick);
//     }

//     return () => {
//       window.removeEventListener("click", onClick);
//     };
//   }, [isOpen]);

//   return [isOpen, ref, removeHandler];
// };

export default function StudyDropMenu() {
  const stateName: string[] = ['학습 안 함', '학습 중', '학습 완료'];
  const [stateNum, setStateNum] = useState(0);

  return (
    <div>개발중</div>
    // <div>
    //   <div onClick={myPageHandler} ref={myPageRef}>
    //     마이페이지
    //   </div>
    //   <div isDropped={myPageIsOpen}>
    //     <div>
    //       <div>
    //         <div href="#1-1">메뉴1</div>
    //       </div>
    //       <div>
    //         <div href="#1-2">메뉴2</div>
    //       </div>
    //       <div>
    //         <div href="#1-3">메뉴3</div>
    //       </div>
    //     </Ul>
    //   </Menu>
    // </DropdownContainer>
    // // <Dropdown
    // //   inline
    // //   theme={dropdownTheme}
    // //   label={stateName[stateNum]}
    // //   onClick={(e: any) => {
    // //     e.preventDefault();
    // //   }}
    // // >
    // //   {stateName.map((item, index) => {
    // //     if (index == stateNum) return;
    // //     return (
    // //       <Dropdown.Item
    // //         onClick={() => {
    // //           setStateNum(index);
    // //         }}
    // //       >
    // //         {item}
    // //       </Dropdown.Item>
    // //     );
    // //   })}
    // // </Dropdown>
  );
}
