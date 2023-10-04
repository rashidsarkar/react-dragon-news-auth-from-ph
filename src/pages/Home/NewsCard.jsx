import { Link } from "react-router-dom";

function NewsCard({ news }) {
  const { title, image_url, details, category_id } = news;
  return (
    <div className="mb-16 shadow-xl card bg-base-100">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <Link
              to={`/news/${category_id}`}
              className="font-bold text-blue-400"
            >
              Read More
            </Link>{" "}
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
}

export default NewsCard;
