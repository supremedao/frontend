import "./index.css";
import Link from "next/link";

function Partners() {
  return (
    <>
      <Link href={"https://powerpool.finance/"} target={"_blank"}>
        <span className={"partner-icon partner--power-pool inline-block"} />
      </Link>
      <Link href={"https://safe.global/"} target={"_blank"}>
        <span className="partner-icon partner--safe inline-block" />
      </Link>
      <Link href={"https://balancer.fi/"} target={"_blank"}>
        <span className="partner-icon partner--balancer inline-block" />
      </Link>
      <Link href={"https://www.prime.xyz/"} target={"_blank"}>
        <span className="partner-icon partner--prime-dao inline-block" />
      </Link>
      <Link href={"https://ceramic.network/"} target={"_blank"}>
        <span className="partner-icon partner--ceramic inline-block" />
      </Link>
      <Link href={"https://www.thedaoist.co/"} target={"_blank"}>
        <span className="partner-icon partner--daoist inline-block" />
      </Link>
    </>
  );
}

export default Partners;
