import React from 'react';

export default class ErrorBoundary1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
        console.log(error, errorInfo);
  }
  
render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <img src="https://img.magnific.com/free-vector/glitch-error-404-page_23-2148105404.jpg?semt=ais_hybrid&w=740&q=80" className='img-fluid' />
    }
    
return this.props.children; 
  }
}