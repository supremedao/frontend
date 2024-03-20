import Typography from "@/components/Typography";

function Card({
  title = "",
  icon = "",
  className = "",
  style = {},
  conic,
  children,
}) {
  return (
    <div
      className={`z-[6] flex flex-col rounded-2xl border  border-blue-500/50 ${!conic ? "bg-gradient-to-br from-[--linear-bg-start] to-[--linear-bg-end] backdrop-blur-lg" : ""} px-5 py-7  ${className}`}
      style={style}
    >
      {icon && (
        <div className={"mb-5"}>
          <img src={icon} alt="" />
        </div>
      )}
      {title && <Typography variant={"h3"}>{title}</Typography>}
      {children}
    </div>
  );
}

export default Card;
