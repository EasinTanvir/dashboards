import React, { useEffect, useRef, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { themContext } from "../../../context/themeContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles

const UserVerifyCodeMail = () => {
  const [accordionOne, setAccordionOne] = useState(true);
  const { dark, setDark, isScreenSmall } = themContext();

  const [plainTextValue, setPlainTextValue] = useState("");

  const [subject, setSubject] = useState("Verify Your Code Mail");

  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    // [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript

    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [
      { color: ["#FF5733", "#33FF57", "#3366FF", "red", "black"] },
      { background: ["#ccccff", "#ffcc99", "red"] },
    ], // dropdown with defaults from theme
    // [{ font: [] }],
    [{ align: [] }],
    [{ font: ["sans-serif", "serif", "monospace"] }],
    // ["clean"],
  ];

  const module = {
    toolbar: toolbarOptions,
    clipboard: {
      matchVisual: false,
    },
  };
  const defaultTemplate = `
    <p><strong>@user_name,</strong></p>
    <br />
    <p>Your veryfy code mail has sent successfully</p>
    
   <br />
    <p>Thanks</p>
  `;

  const [editorValue, setEditorValue] = useState(defaultTemplate);

  const handlechangeeditor = (editor) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(editor, "text/html");
    const plainText = htmlDoc.body.textContent || "";
    setEditorValue(editor);
    setPlainTextValue(plainText);
  };

  console.log(plainTextValue);

  return (
    <div>
      <Accordion expanded={accordionOne} className="w-full">
        <AccordionSummary
          onClick={() => setAccordionOne(!accordionOne)}
          style={{ backgroundColor: "white" }}
          expandIcon={<ExpandMoreIcon className="dark:text-white" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <button className="dark:text-white text-black font-myfont font-bold text-md ">
            User Verify Code Mail
          </button>
        </AccordionSummary>
        <AccordionDetails className="dark:bg-gray-700">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <div className="flex flex-col gap-8 ">
              <div>
                <h1 style={{ fontWeight: 900, fontSize: "14px" }}>Subject</h1>
                <input
                  value={subject}
                  onChange={(e) => setSubject()}
                  className="border px-2 py-1 text-gray-600 border-gray-600 w-full rounded-sm outline-none"
                  type="text"
                  placeholder=""
                />
              </div>
              <div>
                <h1 style={{ fontWeight: 900, fontSize: "14px" }}>Message</h1>
                <ReactQuill
                  value={editorValue}
                  modules={module}
                  theme="snow"
                  onChange={handlechangeeditor}
                />
              </div>

              <div
                className="text-red-800  font-myfont"
                style={{ fontSize: "11px" }}
              >
                <p>@name will be replaced dynamically with name</p>
                <p>@user_name will be replaced dynamically with username</p>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default UserVerifyCodeMail;
