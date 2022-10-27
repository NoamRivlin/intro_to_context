const ErrorMessage = ({ error }) => {
  return (
    <p className="text-danger">
      {error.message}: Sorry your specific request is currently inaccessible.
      Please try an alternative method or contact customer support for
      assistance.
    </p>
  );
};

export default ErrorMessage;
