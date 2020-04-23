import React,{useState} from 'react';
import { UPDATE_FILE_HEX } from '../store/actions';
import { useDispatch } from 'react-redux';

const FileUpload = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);

	// On file select (from the pop up)
	const onFileChange = event => {
    // Update the state
    setSelectedFile(event.target.files[0]);
	};

	// On file upload (click the upload button)
	const onFileUpload = () => {
	// Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      selectedFile,
      selectedFile.name
    );

    // Details of the uploaded file
    console.log(selectedFile);
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer( selectedFile );
    let data = []
    fileReader.onload = (event) => {
      data = event.target.result
      dispatch({type: UPDATE_FILE_HEX, data: data});
    };
	};

  return (
    <div>
      <h3>
        Please upload your file here.
      </h3>
      <div>
        <input type="file" onChange={onFileChange} />
        <button onClick={onFileUpload}>
        Upload!
        </button>
      </div>
    </div>
  );

}

export default FileUpload;
