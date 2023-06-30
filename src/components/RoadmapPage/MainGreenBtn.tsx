export default function MainGreenBtn(props: {
  string: string;
  onClick: () => void;
  class?: string;
}) {
  return (
    <button
      className={
        'text-white bg-main hover:brightness-95 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center' +
        props.class
      }
      onClick={props.onClick}
    >
      {props.string}
    </button>
  );
}
