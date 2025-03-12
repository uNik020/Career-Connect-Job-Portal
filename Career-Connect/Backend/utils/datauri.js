import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) => {
    //console.log("Received file object:", file); // Debugging line

    if (!file) {
        console.error("Error: No file provided");
        throw new Error("Invalid file input: file is undefined or null");
    }

    if (!file.originalname) {
        console.error("Error: file.originalname is undefined");
        throw new Error("Invalid file input: originalname is missing");
    }

    if (!file.buffer) {
        console.error("Error: file.buffer is undefined");
        throw new Error("Invalid file input: buffer is missing");
    }

    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();

    //console.log("Extracted file extension:", extName); // Debugging line

    const formatted = parser.format(extName, file.buffer);
    //console.log("Generated Data URI:", formatted.content ? formatted.content.substring(0, 50) + "..." : "No Data URI generated"); // Debugging line

    return formatted;
};

export default getDataUri;
