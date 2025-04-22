import React, { useState } from "react";

type Props = {
  onSend: (data: any) => void;
};

const RequestForm: React.FC<Props> = ({ onSend }) => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState("{}");
  const [body, setBody] = useState("{}");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend({
      method,
      url,
      headers: JSON.parse(headers),
      body: JSON.parse(body),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label>Method: </label>
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
          <option>PATCH</option>
        </select>
      </div>
      <div>
        <label>URL: </label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://api.example.com"
          required
        />
      </div>
      <div>
        <label>Headers (JSON):</label>
        <textarea
          value={headers}
          onChange={(e) => setHeaders(e.target.value)}
        />
      </div>
      <div>
        <label>Body (JSON):</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          disabled={method === "GET"}
        />
      </div>
      <button type="submit">Send Request</button>
    </form>
  );
};

export default RequestForm;
