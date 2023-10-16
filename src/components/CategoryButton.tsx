
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
          className="p-1 bg-blue-200 rounded hover:bg-blue-300 text-title-xxsm uppercase text-center flex items-center justify-center"
        >
          {category}
        </a>
      </>
    );
  };
