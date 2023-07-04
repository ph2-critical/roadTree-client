'use client';

import { Dropdown, Flowbite } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { useState } from 'react';

const dropdownTheme: CustomFlowbiteTheme['dropdown'] = {
  floating: {
    target: '',
  },
  inlineWrapper:
    'text-gray-600 font-semibold bg-gray-300 hover:brightness-75 p-1 px-2 text-center text-sm rounded-sm flex items-center justify-center',
};

export default function StudyDropMenu() {
  const stateName: string[] = ['학습 안 함', '학습 중', '학습 완료'];
  const [stateNum, setStateNum] = useState(0);

  return (
    <Dropdown
      inline
      theme={dropdownTheme}
      label={stateName[stateNum]}
      onClick={(e: any) => {
        e.preventDefault();
      }}
    >
      {stateName.map((item, index) => {
        if (index == stateNum) return;
        return (
          <Dropdown.Item
            onClick={() => {
              setStateNum(index);
            }}
          >
            {item}
          </Dropdown.Item>
        );
      })}
    </Dropdown>
  );
}
