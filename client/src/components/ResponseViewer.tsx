import React from "react";

type Props = {
  response: any;
};

const ResponseViewer: React.FC<Props> = ({ response }) => {
  return (
    <div className="bg-gray-100 p-4 mt-4">
      <h3>Response:</h3>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default ResponseViewer;
