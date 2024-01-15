const Component = ({ category_name, duration }) => {
  return (
    <>
      <div className="article-card-read-time">
        <div>{category_name}</div>
        <div>{duration} min read</div>
      </div>
    </>
  );
};

export default Component;
