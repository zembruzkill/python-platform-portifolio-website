
interface Props {
    index: number;
    href: string;
    category: string;
}

export default async function CategoryButton({category, index, href}: Props) {  

    return (
      <>
        <a
          href={`${href}`}
          key={index}
          className="p-1 bg-zinc-200 text-zinc-700 rounded hover:bg-zinc-300 text-title-xxsm uppercase text-center flex items-center justify-center"
        >
          {category}
        </a>
      </>
    );
  };
