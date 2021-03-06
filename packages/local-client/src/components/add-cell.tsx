import "./add-cell.css";
import React from "react";

import { useActions } from "../hooks/use-actions";

interface AddCellProps {
  prevCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ prevCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className="add-buttons">
        <button className="button is-rounded is-info is-small" onClick={() => insertCellAfter(prevCellId, "code")}>
          <span className='icon is-small'>
            <i className='fas fa-plus' />
          </span>
          <span>
          Code
          </span>
        </button>
        <button className="button is-rounded is-info is-small" onClick={() => insertCellAfter(prevCellId, "text")}>
        <span className='icon is-small'>
            <i className='fas fa-plus' />
          </span>
          <span>
          Text
          </span>
        </button>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default AddCell;
