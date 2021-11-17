import "./breadCrumb.css";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useBreadcrumbContext } from "../../BreadcrumbContext";

const Breadcrumbs = () => {

  const { breadcrumbTitle, breadcrumbItems } = useBreadcrumbContext();

  return breadcrumbTitle !== null ? (
    <Breadcrumb>
      <div className="breadcrumb-title">
        {breadcrumbTitle}
      </div>
      <div className="breadcrumb-right">
        {breadcrumbItems.map((item, i, { length }) => (
          <Breadcrumb.Item active key={item.text}>
            {length - 1 === i ? (
              <div className="purple-text-br">
                <span style={{ marginRight: '5px' }}>&#8594;</span> {item.text}
              </div>
            ) : (
              <Link to={item.href}>
                {item.text}
              </Link>
            )}
          </Breadcrumb.Item>
        ))}
      </div>
    </Breadcrumb>
  ) : null;
}

export default Breadcrumbs;
