import { Container } from 'react-bootstrap';
import MyRoutes from './MyRoutes';

function App() {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}>
      <MyRoutes />
    </Container>
  );
}

export default App;
