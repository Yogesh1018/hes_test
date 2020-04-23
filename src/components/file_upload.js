import React,{Component} from 'react';
import HexViewer from './hexViewer'

class FileUpload extends Component { 

	state = { 

	// Initially, no file is selected 
    selectedFile: null,
    fileData: []
	}; 
	
	// On file select (from the pop up) 
	onFileChange = event => { 
	
    // Update the state 
    this.setState({ selectedFile: event.target.files[0] }); 
	
	}; 
	
	// On file upload (click the upload button) 
	onFileUpload = () => { 
	
	// Create an object of formData 
    const formData = new FormData(); 
    
    // Update the formData object 
    formData.append( 
      "myFile", 
      this.state.selectedFile, 
      this.state.selectedFile.name 
    ); 
    
    // Details of the uploaded file 
    console.log(this.state.selectedFile);
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer( this.state.selectedFile );
    let data = []
    fileReader.onload = (event) => {
      data = event.target.result
      console.log(data)
      this.setState({ fileData: data })
    };
	}; 
	
	
	render() { 	
    return ( 
      <div> 
        <h1> 
        GeeksforGeeks 
        </h1> 
        <h3> 
        File Upload using React! 
        </h3> 
        <div> 
          <input type="file" onChange={this.onFileChange} /> 
          <button onClick={this.onFileUpload}> 
          Upload! 
          </button> 
        </div> 
        <HexViewer  
        buffer={this.state.fileData} rowLength={16} setLength={1} />
      </div> 
    ); 
	} 
} 

export default FileUpload; 
