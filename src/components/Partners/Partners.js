import "./index.css";
import Link from "next/link";

function Partners() {
  return (
    <div className={"flex flex-wrap gap-1 sm:gap-4 lg:flex-row"}>
      <div className={"scale-75 sm:scale-100"}>
        <span className={"partner-icon partner--power-pool inline-block"} />
      </div>
      <div className={"scale-75 sm:scale-100"}>
        <span className="partner-icon partner--safe inline-block" />
      </div>
      <div className={"scale-75 sm:scale-100"}>
        <span className="partner-icon partner--balancer inline-block" />
      </div>
      <div className={"scale-75 sm:scale-100"}>
        <span className="partner-icon partner--prime-dao inline-block" />
      </div>
      <div className={"scale-75 sm:scale-100"}>
        <span className="partner-icon partner--ceramic inline-block" />
      </div>
      <div className={"scale-75 sm:scale-100"}>
        <span className="partner-icon partner--daoist inline-block" />
      </div>
    </div>
  );
}

export default Partners;
