import React from 'react';
import { Rive } from '@rive/react'; // Import Rive

function NotFound() {
  return (
    <div>
      <h1>404: Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      {/* Add Rive component */}
      <Rive src="./rives/404-SCAL.riv" artboard="ArtboardName" autoplay />
    </div>
  );
}

export default NotFound;
