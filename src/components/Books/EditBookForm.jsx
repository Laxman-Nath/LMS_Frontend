/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Input } from "../../uiutils/Input";
import { SubmitButton } from "../../uiutils/SubmitButton";
import { HiXMark } from "react-icons/hi2";

import { useSearchParams } from "react-router-dom";


import { UPDATE_BOOK } from "../../utils/Routes";
import { useState } from "react";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";
import { useQueryClient } from "@tanstack/react-query";

export const EditBookForm = ({ onClick, book }) => {
  // const {data,isLoading,isError,error}=useGetBookById();
  // console.log("Data",data({bookId}));
  const [image, setImage] = useState("");
  const queryClient = useQueryClient();
  const [isUploading, setIsUploading] = useState(false);
  const { update, isPending, isError, error } = useUpdateBook();
  const id = book.id;
  const bookImage = book.bookImage;
  console.log("Book id:", id);
  console.log("Book image", bookImage);
  const { register, handleSubmit, formState, getValues } = useForm({
    defaultValues: {
      title: book?.title || "",
      quantity: book?.quantity || 0,
      authorName: book?.authorName || "",
      publishedDate: book?.publishedDate || "",
      isbn: book?.isbn || " ",
    },
  });

  const handleImage = async (event) => {
    const file = event.target.files[0];

    if (file) {
      setIsUploading(true); 
      try {
        const imageUrl = await uploadToCloudinary(file, "image");
        setImage(imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
        
      } finally {
        setIsUploading(false);
      }
    }
  };

  const onSubmit = async (data) => {
    
    if (isUploading) {
      console.log("Image is still uploading, please wait...");
      return;
    }

    
    data.bookImage = image;

    try {
      console.log("Submitting data with image:", data);
      await update({ data: data, path: `${UPDATE_BOOK}?bookId=${id}` });
      queryClient.invalidateQueries(["books"]);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const onError = (error) => {
    console.log(error);
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className=" shadow-2xl shadow-white p-4 w-[40%]  bg-primary rounded-md flex flex-col justify-center text-white"
      >
        <button
          className=" text-white border-none p-2 rounded-sm translate-x-2 transition-all duration-200 "
          onClick={onClick}
        >
          <HiXMark className="w-5 h-5 text-white hover:text-gray-900" />
        </button>
        <h1 className="font-bold text-5xl text-center rounded-md text-white ">
          Update Book
        </h1>
        <hr className="border-t border-gray-300 w-full h-2" />
        <Input
          type="text"
          name="title"
          label="Title"
          id="title"
          register={{
            ...register("title", {
              required: "Title is required",
            }),
          }}
        />
        <Input
          type="number"
          name="quantity"
          label="Quantity"
          id="quantity"
          register={{
            ...register("quantity", {
              required: "Quantity is required",
            }),
          }}
        />

        <Input
          type="text"
          name="authorName"
          id="authorName"
          label="Author Name"
          register={{
            ...register("authorName", {
              required: "AuthorName is required",
            }),
          }}
        />

        <Input
          type="text"
          name="isbn"
          id="isbn"
          label="ISBN"
          register={{ ...register("isbn", { required: "ISBN is required" }) }}
        />

        <Input
          type="date"
          name="publishedDate"
          id="publishedDate"
          label="PublishedDate"
          register={{
            ...register("publishedDate", {
              required: "Published date is required",
            }),
          }}
        />

        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="text-2xl">Old Image:</h1>
          <img
            src={book.bookImage}
            className="w-20 h-20 object-cover rounded "
          />
        </div>
        <div className="text-center flex flex-col justify-center items-center text-2xl p-2">
          <label className="">Change Image:</label>
          <hr />
          <input
            type="file"
            name="Image"
            id="Image"
            onChange={handleImage}
            accept="image/*"
            className=" h-17 text-sm border-2 border-white rounded-md outline-none p-2 hover:scale-90 hover:cursor-pointer transition-all ease-in-out duration-[1200ms] w-[70%] text-white"
          />
          <input
            type="hidden"
            name="bookImage"
            id="bookImage"
            {...register("bookImage")}
          />
        </div>
        <SubmitButton>Update</SubmitButton>
      </form>
    </div>
  );
};
