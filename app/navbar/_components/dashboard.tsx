export default function Dashboard({
  img,
  title,
}: {
  img: string;
  title: string;
}) {
  return (
    <div className="mt-2 text-white-900">
      <div className="flex gap-2 items-center   ">
        <img src={img} className="h-4 w-4 invert" />
        <p>{title}</p>
        </div>
    </div>
  );
}