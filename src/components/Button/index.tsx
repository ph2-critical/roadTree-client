export interface ButtonProps {
  emoji: string;
  count?: number;
}

export const Button = (props: ButtonProps) => {
  return (
    <>
      <button
        type="button"
        className="inline-flex w-20 items-center gap-x-1.5 rounded-md border border-gray1 bg-white px-2.5 py-1.5 text-sm font-base text-gray1 shadow-sm hover:bg-gray2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <div className="ml-0.5 h-5 w-5 mr-2">{props.emoji}</div>
        <p>{props.count || 0}</p>
      </button>
    </>
  );
};
