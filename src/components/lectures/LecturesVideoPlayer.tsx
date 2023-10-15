export default function LecturesVideoPlayer({url, allow }: {url: any, allow: any}) {

  return (
    <>
      <div className="relative bg-[#000000] pb-[54.00%] max-w-full">
        <iframe
          className="absolute t-0 l-0 w-full h-full"
          src={url}
          allow={allow}
        ></iframe>
      </div>
    </>
  );
}
