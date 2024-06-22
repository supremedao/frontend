import Popup from "reactjs-popup";
import "./index.css";

const Tooltip = ({ content, children, ...props }) => (
  <Popup
    trigger={<span className={"cursor-pointer"}>{children}</span>}
    position={["bottom left"]}
    closeOnDocumentClick
    {...props}
    // keepTooltipInside=".tooltipBoundary"
  >
    {content}
  </Popup>
);

export default Tooltip;
