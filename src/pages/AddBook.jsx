import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddBook } from "../hooks/queries/Book/useAddBook";
import { Spinner } from "../components/Spinner";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import { ADD_BOOK } from "../utils/Routes";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";
import { FileInput } from "../components/FileInput";


export const AddBook = () => {
  const [image, setImage] = useState("");
  const { addBook, isError, isPending } = useAddBook();
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
       <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#111] to-black overflow-x-hidden">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-xl shadow-black/70 p-8 w-full max-w-3xl bg-[#161616] border border-white/10 rounded-2xl flex flex-col gap-1 text-white mt-20"
      >
        <h2 className="text-center text-4xl font-extrabold mb-2 ">Add Book</h2>
        <hr className="border-white/20" />
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
          {/* <input
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
          /> */}

          <FileInput
                        name="bookImage"
                        label="Book Image"
                        id="bookImage"
                        error={!image && "This field is required"}
                        register={{
                          ...register("profileImage"),
                        }}
                        handleImage={handleImage}
                      />

          <SubmitButton>Add</SubmitButton>
        </form>
      </div>
    </>
  );
};
