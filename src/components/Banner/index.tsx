interface BannerProps {
  title: string;
  description?: string;
  image?: string;
}

export const Banner = (props: BannerProps) => {
  const { title } = props;
  return (
    <section className="fixed bottom-0 left-0 flex flex-col w-full h-40 bg-gray5">
      <h1 className="m-auto title-text">{title}</h1>
    </section>
  );
};
