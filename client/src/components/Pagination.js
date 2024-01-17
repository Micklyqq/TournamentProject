import { TournamentStore } from "../store/TournamentStore";
import "../css/pagination.css";

const Pagination = ({ totalCount, limit, page, setPage }) => {
  const pageCount = Math.ceil(totalCount / limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  return (
    <div className="pagination">
      {pages.map((pageMap) => (
        <div
          key={pageMap}
          className={page === pageMap ? "pageItem active" : "pageItem"}
          onClick={() => setPage(pageMap)}
        >
          {pageMap}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
