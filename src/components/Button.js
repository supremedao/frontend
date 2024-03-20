const Button = ({
  className = "",
  color = "light",
  size = "medium",
  children,
  shadow,
  ...props
}) => {
  const colorClasses = {
    light: "bg-black/5 hover:bg-black/10 border-black/10 focus:ring-slate-100",
    blue: " bg-primary hover:bg-blue-600 border-0 focus:ring-blue-100 text-white",
    white:
      "bg-white/40 hover:bg-white/50 border-white focus:ring-slate-100 text-black",
  };

  const sizeClasses = {
    small: "py-2 px-4 text-sm",
    medium: "py-4 px-10 text-base font-semibold",
    large: `py-5 px-14 text-xl leading-6 font-semibold ${shadow ? "shadow-md shadow-slate-400" : ""}`,
  };

  const colorClass = colorClasses[color] || "";
  const sizeClass = sizeClasses[size] || "";

  return (
    <button
      className={`rounded-full border focus:outline-none focus:ring focus:ring-opacity-75  ${colorClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
