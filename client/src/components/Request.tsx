import React, { useState } from "react";
import RequestForm from "./RequestForm";
import ResponseViewer from "./ResponseViewer";
import axios from "axios";

const MainApp: React.FC = () => {
  const [response, setResponse] = useState<any>(null);

  const handleSend = async (requestData: any) => {
    try {
      const res = await axios.post("http://localhost:5000/api/", requestData);
      setResponse(res.data);
    } catch (err: any) {
      setResponse({ error: err.message });
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Postman Clone</h1>
      <RequestForm onSend={handleSend} />
      {response && <ResponseViewer response={response} />}
    </div>
  );
};

export default MainApp;
