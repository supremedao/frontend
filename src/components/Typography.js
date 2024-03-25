function Typography({ as, children, variant = "p", className = "", ...props }) {
  const variantClasses = {
    h1: "mb-2 text-3xl font-semibold leading-10 tracking-tight text-black md:text-5xl md:leading-tight", // 48px
    h2: `mb-4 sm:mb-10 text-3xl sm:text-4xl leading-tight sm:leading-snug font-semibold`, // 40px
    h3: `mb-2 text-2xl font-semibold leading-snug`, // 24px
    h4: `mb-5 text-xl font-semibold leading-snug`, // 24px
    lead: "md:text-lg", // 18px
    default: `text-base`, // 16px
  };

  const tagsMap = {
    lead: "p",
    default: "p",
  };

  const Component = as || tagsMap[variant] || variant;

  const variantClass = variantClasses[variant] || variantClasses["default"];

  return (
    <Component className={`${variantClass} ${className}`} {...props}>
      {children}
    </Component>
  );
}

export default Typography;
