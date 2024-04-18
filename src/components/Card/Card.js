import Typography from "@/components/Typography";

const VARIANTS = {
  gray: "bg-black/5",
};

function getBackgroundByVariant(variant = "") {
  return (
    VARIANTS[variant] ||
    "bg-gradient-to-br from-[--linear-bg-start] to-[--linear-bg-end]"
  );
}

function Card({
  title = "",
  icon = "",
  className = "",
  style = {},
  conic,
  variant, // gray, conic
  children,
  noise = true,
}) {
  return (
    <div
      className={`${noise ? "card--noise" : ""} card flex flex-col rounded-2xl border  border-blue-500/50 ${!conic ? getBackgroundByVariant(variant) : ""} px-5 py-7  ${className}`}
      style={style}
    >
      {icon && (
        <div className={"relative z-[6] mb-5"}>
          <img src={icon} alt="" />
        </div>
      )}
      {title && <Typography variant={"h3"}>{title}</Typography>}
      {children}
    </div>
  );
}

export default Card;
