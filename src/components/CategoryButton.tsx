
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
          className="p-1 text-white bg-[#5271FF] rounded hover:bg-[#374a9d] text-title-xxsm uppercase text-center flex items-center justify-center"
        >
          {category}
        </a>
      </>
    );
  };
