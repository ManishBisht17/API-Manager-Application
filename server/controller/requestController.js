import axios from "axios";

// Handling all the request
export const FetchAllRequest = async (req, res) => {
  const { method, url, headers, body } = req.body;

  try {
    const axiosConfig = {
      method,
      url,
      headers,
      data: body,
    };

    const response = await axios(axiosConfig);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// // Function to perform a POST request
// export const postRequest = async (req, res) => {
//   const { method, url, headers, body } = req.body;

//   try {
//     const axiosConfig = {
//       method,
//       url,
//       headers,
//       data: body,
//     };

//     const response = await axios(axiosConfig);
//     res.json(response.data);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Function to perform a DELETE request
// export const deleteRequest = async (req, res) => {
//   const { method, url, headers, body } = req.body;

//   try {
//     const axiosConfig = {
//       method,
//       url,
//       headers,
//       data: body,
//     };

//     const response = await axios(axiosConfig);
//     res.json(response.data);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Function to perform a PATCH request
// export const patchRequest = async (req, res) => {
//   const { method, url, headers, body } = req.body;

//   try {
//     const axiosConfig = {
//       method,
//       url,
//       headers,
//       data: body,
//     };

//     const response = await axios(axiosConfig);
//     res.json(response.data);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
