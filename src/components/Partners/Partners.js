import "./index.css";
import Link from "next/link";

function Partners() {
  return (
    <div className={"flex flex-wrap gap-1 sm:gap-4 lg:flex-row"}>
      <Link
        href={"https://powerpool.finance/"}
        target={"_blank"}
        className={"scale-75 sm:scale-100"}
      >
        <span className={"partner-icon partner--power-pool inline-block"} />
      </Link>
      <Link
        href={"https://safe.global/"}
        target={"_blank"}
        className={"scale-75 sm:scale-100"}
      >
        <span className="partner-icon partner--safe inline-block" />
      </Link>
      <Link
        href={"https://balancer.fi/"}
        target={"_blank"}
        className={"scale-75 sm:scale-100"}
      >
        <span className="partner-icon partner--balancer inline-block" />
      </Link>
      <Link
        href={"https://www.prime.xyz/"}
        target={"_blank"}
        className={"scale-75 sm:scale-100"}
      >
        <span className="partner-icon partner--prime-dao inline-block" />
      </Link>
      <Link
        href={"https://ceramic.network/"}
        target={"_blank"}
        className={"scale-75 sm:scale-100"}
      >
        <span className="partner-icon partner--ceramic inline-block" />
      </Link>
      <Link
        href={"https://www.thedaoist.co/"}
        target={"_blank"}
        className={"scale-75 sm:scale-100"}
      >
        <span className="partner-icon partner--daoist inline-block" />
      </Link>
    </div>
  );
}

export default Partners;
