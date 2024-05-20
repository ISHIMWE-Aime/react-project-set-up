import { NavLink } from "react-router-dom";

const Sample = () => {
  return (
    <>
      <div className="flex-column p-11">
        <div>
          <h1>Routing Sample</h1>
        </div>
        <div className="flex justify-between p-6">
          <button>
            <NavLink to="/sample-1">Sample 1</NavLink>
          </button>
          <button>
            <NavLink to="/sample-2">Sample 2</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sample;
