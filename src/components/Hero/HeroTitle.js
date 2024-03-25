import Typography from "@/components/Typography";

function HeroTitle({ children }) {
  return (
    <Typography variant={"h1"} className={"mb-4"}>
      {children}
    </Typography>
  );
}

export default HeroTitle;
