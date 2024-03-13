function Typography({ as, children, variant = "p", className = "", ...props }) {
  const Component = as || variant;

  const variantClasses = {
    h1: "mb-2 text-3xl font-extrabold leading-10 tracking-tight text-black md:text-5xl md:leading-tight", // 48px
    h2: `mb-4 sm:mb-10 text-3xl sm:text-4xl leading-tight sm:leading-snug font-bold`, // 40px
    h3: `mb-2 text-2xl font-semibold leading-snug`, // 24px
    h4: `mb-5 text-xl font-semibold leading-snug`, // 24px
    lead: "text-lg", // 18px
    default: `text-base`, // 16px
  };

  const variantClass = variantClasses[variant] || variantClasses["default"];

  return (
    <Component className={`${variantClass} ${className}`} {...props}>
      {children}
    </Component>
  );
}

export default Typography;
