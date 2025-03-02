"use client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { imageU, ProfileU, AddFranchise, AddStartup } from "../services/userService";

export default function Profile({ onUpload }) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    image: "",
    password: "",

  });

  const [form2, setForm2] = useState({ franchiseName: "", description: "", category: "", mobileNumber: "", email: "", image: "", image2: "", location: "" });

  const [form3, setForm3] = useState({ startupName: "", description: "", category: "", mobileNumber: "", email: "", image: "", image2: "", location: "" });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
    } else {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setForm((prevForm) => ({
          ...prevForm,
          email: parsedUser.email || "",
        }));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, [navigate]);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    toast.success("Logged Out", { duration: 2000 });

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const handleFileChange = async (e) => {
    alert("File change detected");
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    // Debugging FormData contents
    for (let pair of formData.entries()) {
    
    }

    try {
      const res = await imageU(formData);
     

      if (!res || !res.url) {
        console.error("Invalid API response:", res);
        return;
      }

      // Update state safely
      setForm(prevForm => ({ ...prevForm, image: res.url }));

      if (typeof onUpload === "function") {
        onUpload(res.url);
      } else {
        console.warn("onUpload function is undefined.");
      }
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange2 = async (e) => {
    alert("File change detected");
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    // Debugging FormData contents
    for (let pair of formData.entries()) {
     
    }

    try {
      const res = await imageU(formData);
     

      if (!res || !res.url) {
        console.error("Invalid API response:", res);
        return;
      }

      // Update state safely
      setForm2(prevForm => ({ ...prevForm, image: res.url }));

      if (typeof onUpload === "function") {
        onUpload(res.url);
      } else {
        console.warn("onUpload function is undefined.");
      }
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange3 = async (e) => {
    alert("File change detected");
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    // Debugging FormData contents
    for (let pair of formData.entries()) {
     
    }

    try {
      const res = await imageU(formData);
     

      if (!res || !res.url) {
        console.error("Invalid API response:", res);
        return;
      }

      // Update state safely
      setForm2(prevForm => ({ ...prevForm, image2: res.url }));

      if (typeof onUpload === "function") {
        onUpload(res.url);
      } else {
        console.warn("onUpload function is undefined.");
      }
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange4 = async (e) => {
    alert("File change detected");
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    // Debugging FormData contents
    for (let pair of formData.entries()) {
     
    }

    try {
      const res = await imageU(formData);
     

      if (!res || !res.url) {
        console.error("Invalid API response:", res);
        return;
      }

      // Update state safely
      setForm3(prevForm => ({ ...prevForm, image: res.url }));

      if (typeof onUpload === "function") {
        onUpload(res.url);
      } else {
        console.warn("onUpload function is undefined.");
      }
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange5 = async (e) => {
    alert("File change detected");
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    // Debugging FormData contents
    for (let pair of formData.entries()) {
     
    }

    try {
      const res = await imageU(formData);
     

      if (!res || !res.url) {
        console.error("Invalid API response:", res);
        return;
      }

      // Update state safely
      setForm3(prevForm => ({ ...prevForm, image2: res.url }));

      if (typeof onUpload === "function") {
        onUpload(res.url);
      } else {
        console.warn("onUpload function is undefined.");
      }
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setLoading(false);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await ProfileU(form);
      if (res.message) {
        toast.success(res.message, { duration: 2000 });

        localStorage.removeItem("user");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.error('Upload change', error);
    } finally {
      setLoading(false);
    }

  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await AddFranchise(form2);
      if (res.message) {
        toast.success(res.message, { duration: 2000 });

      }
    } catch (error) {
      console.error('Upload change', error);
    } finally {
      setLoading(false);
    }

  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await AddStartup(form3);
      if (res.message) {
        toast.success(res.message, { duration: 2000 });

      }
    } catch (error) {
      console.error('Upload change', error);
    } finally {
      setLoading(false);
    }

  };

  return (
    <>
      <div className="min-h-screen bg-sky-200/30 flex flex-col items-center">
        <Toaster position="top-right" />

        {/* Cover Image */}
        <div className="relative w-full lg:h-[50vh] h-[35vh]">
          <img src="/Slider2.png" className="w-full h-full object-cover shadow-2xl bg-gray-300" alt="Profile Cover" />
        </div>

        {/* Profile Info */}
        <div className="absolute flex gap-4 top-[41.5%] left-[50px] lg:left-[100px]">
          <div className="lg:w-24 w-16 h-16 lg:h-24 rounded-full  shadow-md bg-gray-400"><img src={user?.image} className="lg:w-24 w-16 h-16 lg:h-24 object-cover rounded-full border-4 border-white shadow-md" alt="" /></div>
          <div className="lg:mt-6">
            <h2 className="lg:text-xl text-base font-bold mt-2 text-gray-700">@{user ? user.FirstName : "Guest"}</h2>
            <div className="lg:text-sm text-xs lg:mt-2 flex items-center gap-1 text-sky-900 hover:scale-110 cursor-pointer hover:text-blue-700 transition">
              <div onClick={handleLogOut}>Sign Out -</div>
              <div className="mt-[2px] lg:mt-[3px]">&gt;</div>
            </div>
          </div>
        </div>

        {/* User Info Section */}
        <div className="lg:w-1/2 text-center rounded-2xl border-gray-50 shadow-2xl border-2 p-5 mt-14">
          <p className="text-gray-600 text-lg">{user ? user.email : "No Email Available"}</p>
          <div>
            <span className="text-gray-600 p-2">{user?.CompanyName || ""}</span>
            <span className="text-gray-600">{user?.CompanyPhone || ""}</span>
          </div>
          <button onClick={() => setVisible("profile")} className="bg-white border mt-7 mx-2 border-sky-800 text-sky-800 px-6 py-2 rounded-md hover:bg-[#007bff] hover:text-white transition">
            Edit Profile
          </button>
          <button onClick={() => setVisible("franchise")} className={`bg-white border mt-7 mx-2 border-sky-800 text-sky-800 px-6 py-2 rounded-md hover:bg-[#007bff] hover:text-white transition ${user?.role === "vendor" ? "visible" : "hidden"}`}>
            Add Franchise
          </button>
          <button onClick={() => setVisible("startup")} className={`bg-white border mt-7 mx-2 border-sky-800 text-sky-800 px-6 py-2 rounded-md hover:bg-[#007bff] hover:text-white transition ${user?.role === "vendor" ? "visible" : "hidden"}`}>
            Add Startup
          </button>
        </div>

        {/* Profile Edit Section */}
        <div className={`w-full lg:h-[65vh] mb-5 ${visible === "profile" ? "block" : "hidden"}`}>
          <div className="lg:w-[70%] lg:h-[60vh] m-auto p-5">
            <h1 className="text-black text-xl lg:text-2xl font-bold">Edit Profile</h1>
            <h2 className="text-black text-base lg:text-lg font-sans">Edit Your Profile for Better Visualization</h2>
            <div className="border-2 m-2 border-gray-50 shadow-2xl w-full h-[40vh] lg:h-[50vh] rounded-2xl flex items-center justify-center">
              <form onSubmit={handleSubmit} className="space-y-6 p-2 lg:w-[50%]">
                <div className="flex items-center justify-between gap-3 w-full">
                  <div>
                    <div className="my-3">
                      <label htmlFor="FirstName" className="block text-base font-medium text-gray-900">FirstName</label>
                      <input id="FirstName" name="FirstName" type="text" value={form.FirstName} onChange={(e) => setForm({ ...form, FirstName: e.target.value })} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm" placeholder="Enter your FirstName" />
                    </div>
                    <div className="my-3">
                      <label htmlFor="LastName" className="block text-base font-medium text-gray-900">LastName</label>
                      <input id="LastName" name="LastName" type="text" value={form.LastName} onChange={(e) => setForm({ ...form, LastName: e.target.value })} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm" placeholder="Enter your LastName" />
                    </div>
                  </div>
                  <div>
                    <div className="my-3">
                      <label htmlFor="image" className="block text-base font-medium text-gray-900">image</label>
                      <input id="image" name="image" type="file" accept="image/*" onChange={handleFileChange} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm" placeholder="Enter your image" />
                    </div>

                    <div className="my-3">
                      <label htmlFor="password" className="block text-base font-medium text-gray-900">password</label>
                      <input id="password" name="password" type="text" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm" placeholder="Enter your password" />
                    </div>
                  </div>
                </div>
                <button type="submit" disabled={loading} className={`w-full px-3 py-1.5 text-white rounded-md ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-500"}`}>
                  {loading ? "Changing..." : "Change"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Franchise Edit Section */}
        <div className={`w-full lg:h-[65vh] mb-5 ${visible === "franchise" ? "block" : "hidden"}`}>
          <div className="lg:w-[70%] lg:h-[60vh] m-auto p-5">
            <h1 className="text-black text-xl lg:text-2xl font-bold">Add Franchise</h1>
            <h2 className="text-black text-base lg:text-lg font-sans">Add Your Franchise Details for Better Visibility</h2>
            <div className="border-2 m-2 border-gray-50 shadow-2xl w-full h-[40vh] lg:h-[50vh] rounded-2xl flex items-center justify-center">
              <form onSubmit={handleSubmit1} className="space-y-6 p-2 lg:w-[50%]">
                <div className="flex items-center justify-between gap-3 w-full">
                  <div>
                    <div className="my-3">
                      <label htmlFor="franchiseName" className="block text-base font-medium text-gray-900">Franchise Name</label>
                      <input id="franchiseName" name="franchiseName" type="text" value={form2.franchiseName} onChange={(e) => setForm2({ ...form2, franchiseName: e.target.value })} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm" placeholder="Enter Franchise Name" />
                    </div>
                    <div className="my-3">
                      <label htmlFor="description" className="block text-base font-medium text-gray-900">Small Description</label>
                      <input id="description" name="description" type="text" value={form2.description} onChange={(e) => setForm2({ ...form2, description: e.target.value })} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm" placeholder="Enter Description" />
                    </div>
                    <div className="my-3">
                      <label htmlFor="category" className="block text-base font-medium text-gray-900">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={form2.category}
                        onChange={(e) => setForm2({ ...form2, category: e.target.value })}
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm"
                      >
                        <option value="" disabled>Select a Category</option>
                        <option value="Food & Beverage">Food & Beverage</option>
                        <option value="Technology">Technology</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Education">Education</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Pet Care">Pet Care</option>
                        <option value="Travel & Hospitality">Travel & Hospitality</option>
                      </select>
                    </div>

                    <div className="my-3">
                      <label htmlFor="location" className="block text-base font-medium text-gray-900">location</label>
                      <input id="location" name="location" type="text" value={form2.location} onChange={(e) => setForm2({ ...form2, location: e.target.value })} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm" placeholder="Enter location" />
                    </div>
                  </div>
                  <div>
                    <div className="my-3">
                      <label htmlFor="mobileNumber" className="block text-base font-medium text-gray-900">Mobile Number</label>
                      <input id="mobileNumber" name="mobileNumber" type="text" value={form2.mobileNumber} onChange={(e) => setForm2({ ...form2, mobileNumber: e.target.value })} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm" placeholder="Enter Mobile Number" />
                    </div>
                    <div className="my-3">
                      <label htmlFor="email" className="block text-base font-medium text-gray-900">Email Address</label>
                      <input id="email" name="email" type="email" value={form2.email} onChange={(e) => setForm2({ ...form2, email: e.target.value })} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm" placeholder="Enter Email Address" />
                    </div>
                    <div className="my-3">
                      <label htmlFor="image" className="block text-base font-medium text-gray-900">Advertise Image 366px x 260px </label>
                      <input id="image" name="image" type="file" onChange={handleFileChange2} className="block w-full text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none sm:text-sm" />
                    </div>

                    <div className="my-3">
                      <label htmlFor="image2" className="block text-base font-medium text-gray-900">Banner Image 1104px x 448px </label>
                      <input id="image2" name="image2" type="file" onChange={handleFileChange3} className="block w-full text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none sm:text-sm" />
                    </div>
                  </div>
                </div>
                <button type="submit" disabled={loading} onClick={() => setVisible("")} className={`w-full px-3 py-1.5 text-white rounded-md ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-500"}`}>
                  {loading ? "Adding..." : "Add Franchise"}
                </button>
              </form>
            </div>
          </div>
        </div>
        {/*Start up section */}  
        <div className={`w-full lg:h-[65vh] mb-5 ${visible === "startup" ? "block" : "hidden"}`}>
          <div className="lg:w-[70%] lg:h-[60vh] m-auto p-5">
            <h1 className="text-black text-xl lg:text-2xl font-bold">Add Startup</h1>
            <h2 className="text-black text-base lg:text-lg font-sans">Add Your Startup Details for Better Visibility</h2>
            <div className="border-2 m-2 border-gray-50 shadow-2xl w-full h-[40vh] lg:h-[50vh] rounded-2xl flex items-center justify-center">
              <form onSubmit={handleSubmit2} className="space-y-6 p-2 lg:w-[50%]">
                <div className="flex items-center justify-between gap-3 w-full">
                  <div>
                    <div className="my-3">
                      <label htmlFor="startupName" className="block text-base font-medium text-gray-900">Startup Name</label>
                      <input id="startupName" name="startupName" type="text" value={form3.startupName} onChange={(e) => setForm3({ ...form3, startupName: e.target.value })} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm" placeholder="Enter Startup Name" />
                    </div>
                    <div className="my-3">
                      <label htmlFor="description" className="block text-base font-medium text-gray-900">Small Description</label>
                      <input id="description" name="description" type="text" value={form3.description} onChange={(e) => setForm3({ ...form3, description: e.target.value })} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm" placeholder="Enter Description" />
                    </div>
                    <div className="my-3">
                      <label htmlFor="category" className="block text-base font-medium text-gray-900">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={form3.category}
                        onChange={(e) => setForm3({ ...form3, category: e.target.value })}
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm"
                      >
                        <option value="" disabled>Select a Category</option>
                        <option value="Food & Beverage">Food & Beverage</option>
                        <option value="Technology">Technology</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Education">Education</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Pet Care">Pet Care</option>
                        <option value="Travel & Hospitality">Travel & Hospitality</option>
                      </select>
                    </div>

                    <div className="my-3">
                      <label htmlFor="location" className="block text-base font-medium text-gray-900">location</label>
                      <input id="location" name="location" type="text" value={form3.location} onChange={(e) => setForm3({ ...form3, location: e.target.value })} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm" placeholder="Enter location" />
                    </div>
                  </div>
                  <div>
                    <div className="my-3">
                      <label htmlFor="mobileNumber" className="block text-base font-medium text-gray-900">Mobile Number</label>
                      <input id="mobileNumber" name="mobileNumber" type="text" value={form3.mobileNumber} onChange={(e) => setForm3({ ...form3, mobileNumber: e.target.value })} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm" placeholder="Enter Mobile Number" />
                    </div>
                    <div className="my-3">
                      <label htmlFor="email" className="block text-base font-medium text-gray-900">Email Address</label>
                      <input id="email" name="email" type="email" value={form3.email} onChange={(e) => setForm3({ ...form3, email: e.target.value })} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm" placeholder="Enter Email Address" />
                    </div>
                    <div className="my-3">
                      <label htmlFor="image" className="block text-base font-medium text-gray-900">Advertise Image 366px x 260px </label>
                      <input id="image" name="image" type="file" onChange={handleFileChange4} className="block w-full text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none sm:text-sm" />
                    </div>

                    <div className="my-3">
                      <label htmlFor="image2" className="block text-base font-medium text-gray-900">Banner Image 1104px x 448px </label>
                      <input id="image2" name="image2" type="file" onChange={handleFileChange5} className="block w-full text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none sm:text-sm" />
                    </div>
                  </div>
                </div>
                <button type="submit" disabled={loading} onClick={() => setVisible("")} className={`w-full px-3 py-1.5 text-white rounded-md ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-500"}`}>
                  {loading ? "Adding..." : "Add Startup"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
