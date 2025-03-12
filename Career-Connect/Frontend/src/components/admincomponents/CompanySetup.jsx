import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar.jsx";
import { Button } from "../ui/button.jsx";
import { ArrowLeft, Loader2, Building2, Globe, MapPin } from "lucide-react";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import axios from "axios";
import { COMPANY_API_ENDPOINT } from "../../utils/data.js";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import useGetCompanyById from "@/hooks/useGetCompanyById.jsx";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar.jsx";

const CompanySetup = () => {
  const params = useParams();
  useGetCompanyById(params.id);
  const { singleCompany } = useSelector((store) => store.company);
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const [previewImage, setPreviewImage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setInput({ ...input, file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!input.name.trim()) {
      toast.error("Company name is required");
      return;
    }

    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);
    if (input.file) formData.append("file", input.file);

    try {
      setLoading(true);
      const res = await axios.put(
        `${COMPANY_API_ENDPOINT}/update/${params.id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        toast.success("Company updated successfully");
        navigate("/admin/companies");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (singleCompany) {
      setInput({
        name: singleCompany.name || "",
        description: singleCompany.description || "",
        website: singleCompany.website || "",
        location: singleCompany.location || "",
        file: null,
      });
      setPreviewImage(singleCompany.logo || "");
    }
  }, [singleCompany]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b">
            <Button
              variant="ghost"
              onClick={() => navigate("/admin/companies")}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Companies</span>
            </Button>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-blue-600" />
              Company Profile
            </h1>
          </div>

          <form onSubmit={submitHandler} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Logo Upload Section */}
              <div className="md:col-span-2">
                <Label className="block text-sm font-medium text-gray-700 mb-4">
                  Company Logo
                </Label>
                <div className="flex items-center gap-6">
                  <Avatar className="w-20 h-20 border-2 border-gray-200">
                    <AvatarImage
                      src={previewImage || singleCompany?.logo}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gray-100 text-xl">
                      {singleCompany?.name?.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={changeFileHandler}
                      className="hidden"
                      id="logo-upload"
                    />
                    <Label
                      htmlFor="logo-upload"
                      className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Change Logo
                    </Label>
                    <p className="mt-2 text-sm text-gray-500">
                      Recommended size: 400x400 pixels
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="space-y-4">
                <div>
                  <Label className="text-gray-700">Company Name *</Label>
                  <Input
                    name="name"
                    value={input.name}
                    onChange={changeEventHandler}
                    className="mt-1 h-12"
                    required
                  />
                </div>
                <div>
                  <Label className="text-gray-700">Description</Label>
                  <Input
                    name="description"
                    value={input.description}
                    onChange={changeEventHandler}
                    className="mt-1 h-12"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div>
                  <Label className="text-gray-700 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gray-500" />
                    Website
                  </Label>
                  <Input
                    name="website"
                    value={input.website}
                    onChange={changeEventHandler}
                    className="mt-1 h-12"
                    placeholder="https://"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    Location
                  </Label>
                  <Input
                    name="location"
                    value={input.location}
                    onChange={changeEventHandler}
                    className="mt-1 h-12"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => navigate("/admin/companies")}
                  disabled={loading}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanySetup;