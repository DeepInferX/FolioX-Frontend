import React, { useState } from "react";
import BreadCrumb from "components/BreadCrumb/BreadCrumb";
import { Typography } from "@material-ui/core";
import Input from "components/CustomInput/CustomInput";
import { Form, Formik, Field } from "formik";
import { Editor } from "@tinymce/tinymce-react";
import HeaderUnderline from "components/Header/HeaderUnderline";

const Summary = () => {
  const [profileImage, setProfileImage] = useState({
    file: null,
    imgURL: null,
  });

  const handleChange = (event) => {
    const { files } = event.target;

    if (files && files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);

      reader.onloadend = () => {
        setProfileImage({
          file: files[0],
          loading: false,
          imgURL: [reader.result],
        });
      };
    }
  };

  const handleClearClick = () => {
    this.setState({
      file: null,
      imgURL: null,
    });
  };

  return (
    <Formik
      initialValues={{
        position: "",
        companyName: "",
        jobLocation: "",
        imageURL: "",
        positionType: "",
        sector: "",
        costToCompany: "",
        companyWebsite: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <HeaderUnderline text="Summary" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <input
            id="profileImage"
            style={{
              width: "1px",
              height: "1px",
              opacity: "0",
              position: "absolute",
              overflow: "hidden",
              zIndex: "-1",
            }}
            type="file"
            onChange={handleChange}
            accept="image/*"
          />
          <div
            style={{
              border: "1px solid black",
              width: "20%",
              position: "relative",
              width: "200px",
              height: "200px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: profileImage.imgURL
                ? `url(${profileImage.imgURL})`
                : null,
            }}
          >
            <label
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "13px",
              }}
              htmlFor="profileImage"
            >
              {!profileImage.imgURL && "Upload Company Image"}
            </label>
          </div>
          <div style={{ border: "1px solid red", width: "35%" }}>
            <Field
              style={{
                border: "0.3px solid rgba(0,0,0,0.23)",
                opacity: 0.7,
                width: "100%",
              }}
              type="text"
              name="position"
              placeholder="Position"
              component={Input}
            />
            <Field
              style={{
                border: "0.3px solid rgba(0,0,0,0.23)",
                opacity: 0.7,
                width: "100%",
              }}
              type="text"
              name="companyName"
              placeholder="Company/Firm Name"
              component={Input}
            />
            <Field
              style={{
                border: "0.3px solid rgba(0,0,0,0.23)",
                opacity: 0.7,
                width: "100%",
              }}
              type="text"
              name="jobLocation"
              placeholder="Job Location"
              component={Input}
            />
            <Field
              style={{
                border: "0.3px solid rgba(0,0,0,0.23)",
                opacity: 0.7,
                width: "100%",
              }}
              type="text"
              name="imageURL"
              placeholder="Paste Image URL"
              component={Input}
            />
          </div>
          <div style={{ border: "1px solid orange", width: "35%" }}>
            <Field
              style={{
                border: "0.3px solid rgba(0,0,0,0.23)",
                opacity: 0.7,
                width: "100%",
              }}
              type="text"
              name="positionType"
              placeholder="Position Type"
              component={Input}
            />
            <Field
              style={{
                border: "0.3px solid rgba(0,0,0,0.23)",
                opacity: 0.7,
                width: "100%",
              }}
              type="text"
              name="sector"
              placeholder="Sector"
              component={Input}
            />
            <Field
              style={{
                border: "0.3px solid rgba(0,0,0,0.23)",
                opacity: 0.7,
                width: "100%",
              }}
              type="text"
              name="costToCompany"
              placeholder="Cost To Company (CTC)"
              component={Input}
            />
            <Field
              style={{
                border: "0.3px solid rgba(0,0,0,0.23)",
                opacity: 0.7,
                width: "100%",
              }}
              type="text"
              name="companyWebsite"
              placeholder="Company Website"
              component={Input}
            />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

const AdditionalInfromation = () => {
  const handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };

  return (
    <div>
      <HeaderUnderline text="Additional Infromation" />
      <Editor
        initialValue="<p>Initial content</p>"
        apiKey="kjq5cc2movx329ax261rjfdf514zgazt7csybhiw9jd4doug"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help",
        }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default function AddJob() {
  return (
    <div>
      <BreadCrumb
        link1="Courses"
        title="View your courses."
        subtitle="Students will be able to select any one from these courses."
      />
      <div
        style={{ padding: "20px 150px 20px 0px", border: "1px solid yellow" }}
      >
        <div style={{ border: "2px solid red" }}>
          <Summary />
        </div>
        <div style={{ border: "2px solid black" }}>
          <AdditionalInfromation />
        </div>
      </div>
    </div>
  );
}
