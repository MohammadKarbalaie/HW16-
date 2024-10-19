import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home.tsx';
import UsersList from '../src/pages/UsersList';
import UserDetails from '../src/pages/UserDetails';
import Posts from '../src/pages/Posts.tsx';
import PostDetails from '../src/pages/PostDetails.tsx';
import {NotFound} from '../src/pages/NotFound';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient(); 

function App() {
  return (
    <QueryClientProvider client={queryClient}> 
      <Router>
        <div className='w-[1440px] mx-auto'>
        <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/users/:userId" element={<UserDetails />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postId" element={<PostDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
