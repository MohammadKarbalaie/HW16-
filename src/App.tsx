import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import UsersList from './pages/UsersList';
import UserDetails from './pages/UserDetails';
import Posts from './pages/Posts';
import PostDetails from './pages/PostDetails';
import {NotFound} from './pages/NotFound'; // Importing correctly
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className='w-[1440px] mx-auto '>
          <Navbar />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Home />}  />
              {/* Route for Users List */}
              <Route path="/users" element={<UsersList />} />
              {/* Route for User Details */}
              <Route path="/users/:userId" element={<UserDetails />} />
              {/* Route for Posts List */}
              <Route path="/posts" element={<Posts />} />
              {/* Route for Post Details */}
              <Route path="/posts/:postId" element={<PostDetails />} />
              {/* Route for NotFound (404 Page) */}
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
