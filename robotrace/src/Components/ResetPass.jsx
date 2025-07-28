import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPass = () => {
  const [formData, setFormData] = useState({
    newPass: "",
    confirmPass: "",
  });
  const { userId } = useParams();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const url = `http://localhost:5001/user/password/reset/${userId}`;
  const resetHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, formData);
      if (response.status === 200) {
        toast.success(response.data.message);
      }
      console.log(response);
    } catch (error) {
      console.error(error);
      if (error.response.status === 500) {
        toast.error("server Error");
      }
    }
  };

  return (
    <>
      <h1>Change Password</h1>
      <form>
        <input
          type="password"
          placeholder="Enter new Password"
          name="newPass"
          value={formData.newPass}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter new Confirm Password"
          name="confirmPass"
          value={formData.confirmPass}
          onChange={handleChange}
        />
        <button onClick={resetHandler}>Change Password</button>
      </form>
    </>
  );
};

export default ResetPass;
