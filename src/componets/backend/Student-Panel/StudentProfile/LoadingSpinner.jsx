/* eslint-disable react/prop-types */
const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "50vh" }}
    >
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
