export default function CardMedia({ image }) {
  return (
    <>
      {image && (
        <img
          className={"mb-4 w-full rounded-xl border border-white"}
          src={image}
          alt=""
        />
      )}
    </>
  );
}
