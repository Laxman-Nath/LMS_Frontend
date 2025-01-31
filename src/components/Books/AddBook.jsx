import { useForm } from "react-hook-form";
import { Input } from "../Login/Input";
import { SubmitButton } from "../Buttons/SubmitButton";
import { UseAddBook } from "../../Queries/UseAddBook";
import { Spinner } from "../Spinner/Spinner";
import { ADD_BOOK } from "../../utils/Routes";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";
import { useState } from "react";

export const AddBook = () => {
  const [image, setImage] = useState("");
  const { addBook, isError, isPending } = UseAddBook();
  const { register, handleSubmit, formState, getValues, setValue } = useForm();
  if (isError) {
    console.log("error");
  }
  if (isPending) {
    return <Spinner />;
  }
  const handleImage = async (event) => {
    const file = event.target.files[0];

    const imageUrl = await uploadToCloudinary(file, "image");
    // console.log("image url",imageUrl);

    setImage(imageUrl);
  };
  const onSubmit = (data) => {
    console.log("Before", data.bookImage);
    data.bookImage = image;
    console.log("After", data.bookImage);
    addBook({ data: data, path: ADD_BOOK });
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className=" shadow-2xl shadow-white p-4 w-[40%]  bg-primary rounded-md flex flex-col justify-center text-white"
        >
          <h1 className="font-bold text-5xl text-center rounded-md text-white ">
            Add Book
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
            onChange={handleImage}
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

          {/* <Input
            type="file"
            name="bookImage"
            id="bookImage"
            label="Book Image"
            onChange={handleImage}
            register={{
              ...register("bookImage", {
                required: "Book image is required",
              }),
            }}
          /> */}
          <input
            type="file"
            name="Image"
            id="Image"
            onChange={handleImage}
            accept="image/*"
          />
          <input
            type="hidden"
            name="bookImage"
            id="bookImage"
            {...register("bookImage")}
          />

          <SubmitButton>Add</SubmitButton>
        </form>
      </div>
    </>
  );
};
