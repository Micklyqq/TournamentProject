import { TournamentStore } from "../store/TournamentStore";
import "../css/adminPannel.css";

const PaginationAdminPannel = ({ totalCount, limit, page, setPage }) => {
  const pageCount = Math.ceil(totalCount / limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  return (
    <div className="paginationAdmin">
      {pages.map((pageMap) => (
        <div
          key={pageMap}
          className={page === pageMap ? "pageItemAdmin active" : "pageItem"}
          onClick={() => setPage(pageMap)}
        >
          {pageMap}
        </div>
      ))}
    </div>
  );
};

export default PaginationAdminPannel;
