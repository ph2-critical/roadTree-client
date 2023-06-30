import { reference } from '@/public/RoadTreeData';
import Image from 'next/image';

export default function RefBlock(props: { refdata: reference }) {
  const refdata: reference = props.refdata;
  const gradelist: string[] = ['초급', '초중급', '중급', '중고급', '고급'];
  const gradeColor: string[] = [
    'bg-green-100',
    'bg-green-200',
    'bg-green-300',
    'bg-green-400',
    'bg-green-500',
  ];
  return (
    <div className="flex p-3">
      <Image
        src="book.svg"
        alt="book"
        width={14}
        height={14}
        className="w-14 h-14 mr-3"
      ></Image>
      <div className="flex-grow w-32 h-14">
        <div className="flex flex-col justify-center items-start">
          <div
            className={
              'border px-2 rounded-md border-gray1 text-xs text-gray1 ' +
              gradeColor[refdata.grade]
            }
          >
            {gradelist[refdata.grade]}
          </div>
          <div className="text-base font-bold">{refdata.title}</div>
          <div className="text-gray1 text-xs">
            {refdata.amount} | {refdata.price} | {refdata.category}
          </div>
        </div>
      </div>
      <div className="w-14 h-14 p-2 bg-gray-200"></div>
    </div>
  );
}
