import Typography from "@/components/Typography";
import { Card, CardDate, CardMedia } from "@/components/Card";
import Link from "@/components/Link";

function LatestArticles() {
  return (
    <article className={"mb-12 sm:mb-36"}>
      <Typography variant={"h2"}>Latest Articles</Typography>
      <div className="grid w-full gap-4 py-6 md:grid-cols-3">
        <Card>
          <div className={"-mt-2"}>
            <CardMedia image={"/assets/media/img.png"}></CardMedia>
            <Link href={"#"} variant={"h4"}>
              How is SupremeDAO democratizing access to complex DeFi strategies?
              strategies
            </Link>
            <CardDate>Today, 17:35</CardDate>
          </div>
        </Card>
        <Card>
          <div className={"-mt-2"}>
            <CardMedia image={"/assets/media/img.png"}></CardMedia>
            <Link href={"#"} variant={"h4"}>
              How is SupremeDAO democratizing access to complex DeFi strategies?
              strategies
            </Link>
            <CardDate>Today, 17:35</CardDate>
          </div>
        </Card>
        <Card>
          <div className={"-mt-2"}>
            <CardMedia image={"/assets/media/img.png"}></CardMedia>
            <Link href={"#"} variant={"h4"}>
              How is SupremeDAO democratizing access to complex DeFi strategies?
              strategies
            </Link>
            <CardDate>Today, 17:35</CardDate>
          </div>
        </Card>
      </div>
    </article>
  );
}

export default LatestArticles;
