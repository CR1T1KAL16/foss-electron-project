import React from 'react';
import './App.css';
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';

class App extends React.Component {
  render() {
    const handleGallery = () => {
      
  }
  return (
    <div>
      <div style={{ width: '1200px', height: '800px' }}>
        <ImageEditorComponent></ImageEditorComponent>
        <button onClick={handleGallery}>Gallery</button>
      </div>   
    </div>
  );
}
}

export default App;